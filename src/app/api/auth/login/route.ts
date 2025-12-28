import { NextResponse } from 'next/server'
import prisma from '@/lib/db/prisma'
import bcrypt from 'bcrypt'
import { signJWT } from '@/lib/auth/jwt'

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json()

        if (!email || !password) {
            return NextResponse.json({ error: 'Missing credentials' }, { status: 400 })
        }

        const user = await prisma.user.findUnique({
            where: { email },
        })

        if (!user) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }

        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
        }

        const token = await signJWT({ id: user.id, email: user.email })

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
        console.error('Login error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
