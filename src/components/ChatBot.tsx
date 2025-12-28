'use client'

import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Send, X, MessageSquare, Minimize2, Maximize2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type Message = {
    role: 'user' | 'assistant'
    content: string
}

export function ChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        { role: 'assistant', content: 'Hello! I am FinAIze. Ask me about your budget, expenses, or financial advice.' }
    ])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [messages])

    const handleSend = async () => {
        if (!input.trim()) return

        const userMsg = input
        setInput('')
        setMessages(prev => [...prev, { role: 'user', content: userMsg }])
        setLoading(true)

        try {
            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userMsg }),
            })

            const data = await res.json()

            if (res.ok) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.response }])
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error.' }])
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: 'Network error. Please try again.' }])
        } finally {
            setLoading(false)
        }
    }

    if (!isOpen) {
        return (
            <Button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.6)] hover:bg-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.8)] transition-all duration-300 z-50"
            >
                <MessageSquare className="h-6 w-6 text-black" />
            </Button>
        )
    }

    return (
        <Card className="fixed bottom-6 right-6 w-[350px] sm:w-[400px] h-[500px] flex flex-col shadow-2xl border-cyan-500/30 bg-black/90 backdrop-blur-md z-50 animate-in slide-in-from-bottom-10 fade-in duration-300">
            <CardHeader className="flex flex-row items-center justify-between py-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                    <CardTitle className="text-sm font-medium text-cyan-500">FinAIze Assistant</CardTitle>
                </div>
                <div className="flex gap-1">
                    <Button variant="ghost" size="icon" className="h-6 w-6 text-muted-foreground hover:text-white" onClick={() => setIsOpen(false)}>
                        <Minimize2 className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-zinc-700" ref={scrollRef}>
                {messages.map((m, i) => (
                    <div key={i} className={cn("flex w-full", m.role === 'user' ? 'justify-end' : 'justify-start')}>
                        <div className={cn(
                            "max-w-[80%] rounded-2xl px-4 py-2 text-sm",
                            m.role === 'user'
                                ? "bg-cyan-600/20 text-cyan-100 border border-cyan-500/20 rounded-tr-sm"
                                : "bg-zinc-800/50 text-zinc-300 border border-white/5 rounded-tl-sm"
                        )}>
                            {m.content}
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex w-full justify-start">
                        <div className="max-w-[80%] rounded-2xl px-4 py-2 text-sm bg-zinc-800/50 border border-white/5 rounded-tl-sm flex gap-1 items-center">
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce" />
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                            <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                    </div>
                )}
            </CardContent>
            <CardFooter className="p-3 border-t border-white/10">
                <form
                    onSubmit={(e) => { e.preventDefault(); handleSend(); }}
                    className="flex w-full gap-2"
                >
                    <Input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Ask about your finances..."
                        className="bg-zinc-900/50 border-white/10 focus-visible:ring-cyan-500/50"
                    />
                    <Button type="submit" size="icon" variant="neon" disabled={loading || !input.trim()}>
                        <Send className="h-4 w-4" />
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}
