import { NextResponse } from 'next/server'
import prisma from '@/lib/db/prisma'
import { verifyJWT } from '@/lib/auth/jwt'
import { cookies } from 'next/headers'

export async function POST(req: Request) {
    try {
        const cookieStore = cookies()
        const token = cookieStore.get('token')?.value

        if (!token) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const payload = await verifyJWT(token)
        if (!payload) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        // payload.id comes from custom JWT payload
        const userId = payload.id

        await prisma.user.update({
            where: { id: userId },
            data: { isNewUser: false }
        })

        return NextResponse.json({ success: true })

    } catch (error) {
        console.error('Update user error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
