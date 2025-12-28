import { NextResponse } from 'next/server'
import prisma from '@/lib/db/prisma'
import { verifyJWT } from '@/lib/auth/jwt'

export async function POST(req: Request) {
    try {
        const token = req.cookies.get('token')?.value
        const user = await verifyJWT(token || '')

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { amount, category, description, date } = await req.json()

        if (!amount || !category) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
        }

        const expense = await prisma.expense.create({
            data: {
                userId: (user as any).id,
                amount: parseFloat(amount),
                category,
                description,
                date: date ? new Date(date) : new Date(),
            }
        })

        return NextResponse.json(expense)

    } catch (error) {
        console.error('Create expense error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

export async function GET(req: Request) {
    try {
        const token = req.cookies.get('token')?.value
        const user = await verifyJWT(token || '')

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const expenses = await prisma.expense.findMany({
            where: {
                userId: (user as any).id
            },
            orderBy: {
                date: 'desc'
            }
        })

        return NextResponse.json(expenses)

    } catch (error) {
        console.error('Get expenses error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
