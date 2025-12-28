import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield, Zap, TrendingUp, DollarSign } from 'lucide-react'

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col bg-black text-white selection:bg-cyan-500/30">

            {/* Navbar */}
            <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
                <div className="container flex h-16 items-center justify-between px-4 sm:px-8">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600 shadow-[0_0_15px_rgba(6,182,212,0.6)]" />
                        <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">FinAIze</span>
                    </div>
                    <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-400">
                        <Link href="#features" className="hover:text-cyan-400 transition-colors">Features</Link>
                        <Link href="#about" className="hover:text-cyan-400 transition-colors">About</Link>
                        <Link href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</Link>
                    </nav>
                    <div className="flex gap-4">
                        <Link href="/auth/login">
                            <Button variant="ghost" className="text-zinc-400 hover:text-white hover:bg-white/5">Login</Button>
                        </Link>
                        <Link href="/auth/register">
                            <Button variant="neon" className="rounded-full px-6">Get Started</Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 overflow-hidden">
                {/* Background Effects */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none" />

                <div className="container relative z-10 flex flex-col items-center text-center px-4">
                    <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400 mb-8 backdrop-blur-sm">
                        <span className="flex h-2 w-2 rounded-full bg-cyan-500 mr-2 animate-pulse" />
                        AI-Powered Personal Finance
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent mb-6 max-w-4xl">
                        Master your money with intelligent insights.
                    </h1>
                    <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
                        FinAIze tracks your expenses, learns your spending habits, and helps you save smarter—all with the power of AI.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <Link href="/auth/register">
                            <Button size="lg" variant="neon" className="w-full sm:w-auto text-base h-12 px-8">
                                Start for Free <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                        <Link href="#features">
                            <Button size="lg" variant="outline" className="w-full sm:w-auto h-12 bg-white/5 border-white/10 hover:bg-white/10 text-white">
                                Learn More
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section id="features" className="py-24 bg-zinc-950/50 relative">
                <div className="container px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Why FinAIze?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Zap,
                                title: 'Real-time Analytics',
                                desc: 'See exactly where your money goes with instant categorization and beautiful charts.'
                            },
                            {
                                icon: Shield,
                                title: 'Bank-Grade Security',
                                desc: 'Your data is encrypted and secure. We use industry-standard protocols to keep you safe.'
                            },
                            {
                                icon: TrendingUp,
                                title: 'AI Insights',
                                desc: 'Our AI analyzes your spending patterns to provide personalized tips for saving more.'
                            },
                        ].map((feature, i) => (
                            <div key={i} className="group p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]">
                                <div className="h-12 w-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
                                    <feature.icon className="h-6 w-6 text-cyan-500" />
                                </div>
                                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/10 bg-black py-12">
                <div className="container px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2">
                        <div className="h-5 w-5 rounded bg-cyan-600" />
                        <span className="font-bold text-lg">FinAIze</span>
                    </div>
                    <p className="text-sm text-zinc-500">© 2024 FinAIze Inc. All rights reserved.</p>
                </div>
            </footer>

        </div>
    )
}
