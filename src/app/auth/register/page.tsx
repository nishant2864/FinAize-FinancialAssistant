'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import Image from 'next/image'

export default function RegisterPage() {
    const router = useRouter()
    const [formData, setFormData] = useState({ name: '', email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (res.ok) {
                router.push('/dashboard')
            } else {
                const data = await res.json()
                setError(data.error || 'Registration failed')
            }
        } catch (err) {
            setError('Something went wrong')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Logo */}
            <div className="absolute top-8 left-12 h-24 w-24 flex items-center justify-center z-50">
                <Image
                    src="/FinAIze_Logo.png"
                    alt="FinAIze Logo"
                    fill
                    className="object-contain"
                />
            </div>
            {/* Video Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-90"
                >
                    <source src="/background.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="container relative z-20 px-4 mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div>
                            <h4 className="text-cyan-500 font-mono tracking-widest text-sm uppercase mb-4">
                                START JOURNEY
                            </h4>
                            <h2 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight mb-6">
                                Create your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                                    account
                                </span>
                            </h2>
                            <p className="text-xl text-zinc-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                                Join thousands of others taking control of their financial future today.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <Link href="/auth/login">
                                <Button variant="outline" className="h-14 px-8 rounded-full border-zinc-700 hover:text-zinc-800 text-white text-lg bg-black/20 backdrop-blur-sm">
                                    Login Instead
                                </Button>
                            </Link>
                        </div>

                        {error && <p className="text-red-400 text-lg font-medium">{error}</p>}
                    </div>

                    {/* Right Content - Register Form Card */}
                    <Card className="w-full max-w-md mx-auto bg-zinc-900/30 border border-cyan-800 backdrop-blur-md shadow-2xl p-2">
                        <CardContent className="pt-6">
                            <form id="register-form" onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-zinc-300 ml-1">Name</Label>
                                    <Input
                                        id="name"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="h-12 rounded-xl bg-black/50 border-white/10 text-white placeholder:text-zinc-600 hover:border-cyan-500/30 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-zinc-300 ml-1">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="h-12 rounded-xl bg-black/50 border-white/10 text-white placeholder:text-zinc-600 hover:border-cyan-500/30 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-zinc-300 ml-1">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        className="h-12 rounded-xl bg-black/50 border-white/10 text-white placeholder:text-zinc-600 hover:border-cyan-500/30 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm"
                                    />
                                </div>
                            </form>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                                <Button
                                    type="submit"
                                    form="register-form"
                                    className="h-14 px-10 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white text-lg transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)]"
                                    disabled={loading}
                                >
                                    {loading ? 'Creating...' : 'Register'}
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
