'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { PlusCircle, ArrowRight, Wallet, CheckCircle2 } from 'lucide-react'

export default function FirstTimeDashboard() {
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    const handleCompleteSetup = async () => {
        setLoading(true)
        try {
            const res = await fetch('/api/user/complete-setup', { method: 'POST' })
            if (res.ok) {
                window.location.reload() // Force reload to fetch fresh data and switch dashboards
            }
        } catch (error) {
            console.error('Failed to complete setup', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center p-4">

            {/* Liquid Background Animation */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-500 rounded-full mix-blend-multiply filter blur-[100px] animate-blob" />
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-pink-500 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000" />
            </div>

            {/* Glassmorphic Container */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-full max-w-4xl bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overflow-hidden"
            >
                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium"
                        >
                            <Wallet className="w-4 h-4" />
                            <span>Welcome to FinAIze</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl md:text-5xl font-bold leading-tight"
                        >
                            Your financial journey <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                                starts here.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-zinc-400 text-lg leading-relaxed"
                        >
                            No data yet? No problem. Set up your profile, connect your accounts, or start tracking manually to see your insights come to life.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <Button
                                size="lg"
                                className="h-14 px-8 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white text-lg shadow-[0_0_20px_rgba(8,145,178,0.3)] transition-all hover:scale-105"
                                onClick={handleCompleteSetup}
                                disabled={loading}
                            >
                                {loading ? 'Setting up...' : 'Get Started'}
                                {!loading && <ArrowRight className="ml-2 w-5 h-5" />}
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-8 rounded-full border-zinc-700 hover:bg-white/5 text-white text-lg backdrop-blur-sm"
                            >
                                Learn More
                            </Button>
                        </motion.div>
                    </div>

                    <div className="relative hidden md:block">
                        {/* Abstract Visual Representation of Empty State / Start */}
                        <div className="relative w-full aspect-square">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 rounded-full border border-dashed border-white/20"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-16 rounded-full border border-dashed border-cyan-500/30"
                            />

                            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6">
                                {[
                                    { text: "Track Expenses", delay: 0.6 },
                                    { text: "Set Budgets", delay: 0.7 },
                                    { text: "AI Insights", delay: 0.8 },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: item.delay }}
                                        className="flex items-center gap-3 bg-zinc-900/40 border border-white/5 backdrop-blur-md px-6 py-4 rounded-2xl w-48 shadow-lg"
                                    >
                                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="font-medium text-zinc-200">{item.text}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            {/* CSS for custom blob animation if not in global css */}
            <style jsx global>{`
                @keyframes blob {
                    0% { transform: translate(0px, 0px) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                    100% { transform: translate(0px, 0px) scale(1); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}</style>
        </div>
    )
}
