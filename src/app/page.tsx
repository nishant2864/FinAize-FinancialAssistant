'use client'

import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Button } from '@/components/ui/button'
import { Zap, Shield, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-black text-white selection:bg-cyan-500/30 font-sans overflow-x-hidden">

            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay for readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 z-10" />
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80"
                    >
                        <source src="/background.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="container relative z-20 flex flex-col items-center text-center px-4 pt-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-950/30 px-4 py-1.5 text-sm text-cyan-400 mb-8 backdrop-blur-md"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-cyan-500 mr-2 animate-pulse shadow-[0_0_10px_#06b6d4]" />
                        Your Personal <span className="text-white ml-1 font-bold">Financial Assistant</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-zinc-500 mb-6 max-w-5xl"
                    >
                        Your Personal <span className="text-cyan-500 font-mono">Financial Assistant</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed drop-shadow-lg"
                    >
                        Get personalized Financial advice, track your expenses, and make smarter money decisions with our AI-powered chatbot.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    >
                        <Link href="/auth/register">
                            <Button size="lg" className="w-full sm:w-auto text-base h-12 px-8 bg-blue-600 hover:bg-blue-500 text-white border-0 shadow-[0_0_20px_rgba(37,99,235,0.5)]">
                                Start for Free
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 bg-white text-black hover:bg-zinc-200 border-0">
                                Learn More
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-32 bg-black relative">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-900/50 to-transparent" />

                <div className="container px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Why FinAIze?</h2>
                        <p className="text-zinc-400">Everything you need to master your finances.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: 'Real-time Analytics',
                                desc: 'See exactly where your money goes with instant categorization and beautiful charts.',
                                color: 'text-yellow-400'
                            },
                            {
                                icon: Shield,
                                title: 'Bank-Grade Security',
                                desc: 'Your data is encrypted and secure. We use industry-standard protocols to keep you safe.',
                                color: 'text-green-400'
                            },
                            {
                                icon: TrendingUp,
                                title: 'AI Insights',
                                desc: 'Our AI analyzes your spending patterns to provide personalized tips for saving more.',
                                color: 'text-cyan-400'
                            },
                        ].map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm"
                            >
                                <div className="h-14 w-14 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className={`h-7 w-7 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed font-light">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black pt-16 pb-8">
                <div className="container px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 text-sm text-zinc-400">
                        <div>
                            <h4 className="font-bold text-white mb-4">Product</h4>
                            <ul className="space-y-2">
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>Security</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li>About</li>
                                <li>Careers</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li>Privacy</li>
                                <li>Terms</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Social</h4>
                            <ul className="space-y-2">
                                <li>Twitter</li>
                                <li>GitHub</li>
                                <li>Discord</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
                        <div className="flex items-center gap-2">
                            <div className="h-5 w-5 rounded bg-cyan-600" />
                            <span className="font-bold text-lg text-white">FinAIze</span>
                        </div>
                        <p className="text-xs text-zinc-600">© 2024 FinAIze Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>

        </div>
    )
}
