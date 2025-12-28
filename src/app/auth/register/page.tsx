'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardHeader, CardContent, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

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
        <div className="flex min-h-screen items-center justify-center bg-black/50 p-4">
            <Card className="w-full max-w-md border-cyan-500/20 bg-zinc-950">
                <CardHeader>
                    <CardTitle className="text-2xl text-cyan-500">Create Account</CardTitle>
                    <CardDescription>Start your financial journey with FinAIze</CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        {error && <p className="text-sm text-red-500">{error}</p>}
                        <Button type="submit" variant="neon" className="w-full" disabled={loading}>
                            {loading ? 'Creating...' : 'Register'}
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="justify-center">
                    <p className="text-sm text-muted-foreground">
                        Already have an account? <Link href="/auth/login" className="text-cyan-500 hover:underline">Login</Link>
                    </p>
                </CardFooter>
            </Card>
        </div>
    )
}
