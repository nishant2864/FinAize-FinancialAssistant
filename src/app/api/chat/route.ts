import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/lib/db/prisma'
import { verifyJWT } from '@/lib/auth/jwt'
import OpenAI from 'openai'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || 'mock-key',
    baseURL: "https://openrouter.ai/api/v1",
    defaultHeaders: {
        "HTTP-Referer": process.env.NEXTAUTH_URL || "http://localhost:3000",
        "X-Title": "FinAIze",
    }
})

export async function POST(req: NextRequest) {
    try {
        const token = req.cookies.get('token')?.value
        const user = await verifyJWT(token || '')

        if (!user) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
        }

        const { message } = await req.json()
        const userId = (user as any).id

        if (!message) {
            return NextResponse.json({ error: 'Message required' }, { status: 400 })
        }

        // 1. Fetch user context (expenses, budget)
        // For a real production app, we would summarize this or use RAG.
        // Here we fetch the last 20 expenses to give context.
        const recentExpenses = await prisma.expense.findMany({
            where: { userId },
            orderBy: { date: 'desc' },
            take: 20
        })

        // 2. Construct System Prompt
        const systemPrompt = `You are FinAIze, a smart, premium financial assistant.
    User Context:
    - Recent Expenses: ${JSON.stringify(recentExpenses.map((e: { category: string; amount: number; date: Date }) => ({ cat: e.category, amt: e.amount, date: e.date.toISOString().split('T')[0] })))}
    
    Answer the user's question based on this data. Be concise, helpful, and friendly.
    If the user asks to save money, suggest specific tips.
    `

        // 3. Call OpenAI
        let aiResponseText = ""

        if (process.env.OPENAI_API_KEY) {
            console.log("Using API Key:", process.env.OPENAI_API_KEY ? "Present" : "Missing");
            const completion = await openai.chat.completions.create({
                model: "openai/gpt-4o-mini", // OpenRouter requires 'provider/model' format
                messages: [
                    { role: "system", content: systemPrompt },
                    { role: "user", content: message }
                ],
            })
            aiResponseText = completion.choices[0].message.content || "I couldn't process that."
        } else {
            // Fallback for demo without key
            aiResponseText = "I see your request, but I need an OpenAI API Key to analyze your data deeply. (Mock Response)"
        }

        // 4. Save Chat History
        await prisma.chatHistory.createMany({
            data: [
                { userId, role: 'user', message },
                { userId, role: 'assistant', message: aiResponseText }
            ]
        })

        return NextResponse.json({ response: aiResponseText })

    } catch (error) {
        console.error('Chat error:', error)
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}
