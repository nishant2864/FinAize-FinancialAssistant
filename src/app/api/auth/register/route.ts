import { NextResponse } from 'next/server'
import prisma from '@/lib/db/prisma'
import bcrypt from 'bcrypt'
import { signJWT } from '@/lib/auth/jwt'

export async function POST(req: Request) {
    try {
        const { email, password, name } = await req.json()

        if (!email || !password) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const existingUser = await prisma.user.findUnique({
            where: { email },
        })

        if (existingUser) {
            return NextResponse.json({ error: 'User already exists' }, { status: 409 })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                name,
            },
        })

        const token = await signJWT({ id: user.id, email: user.email })

        // In a real app, set cookie here or return token
        const response = NextResponse.json({
            user: { id: user.id, email: user.email, name: user.name },
            token
        })

        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 60 * 60 * 24, // 1 day
            path: '/',
        })

        return response

    } catch (error) {
        console.error('Registration error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
