'use client'

import { motion } from 'framer-motion'
import { Mail, ArrowRight, Twitter, Linkedin, Instagram, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export function Contact() {
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900/50 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h4 className="text-cyan-500 font-mono tracking-widest text-sm uppercase">
                            Connect
                        </h4>

                        <h2 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight">
                            Let's build your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                                financial future
                            </span>
                        </h2>

                        <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
                            Always interested in helping you achieve financial freedom.
                            From smart budgeting to AI-driven investment insights,
                            we're here to guide you every step of the way.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <Link href="/auth/register">
                                <Button className="h-14 px-8 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white text-lg transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] hover:shadow-[0_0_30px_rgba(8,145,178,0.5)]">
                                    Start Your Journey <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content - Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-4 mt-8 lg:mt-0"
                    >
                        {[
                            {
                                handle: "Launching Soon...",
                                platform: "Twitter",
                                icon: Twitter,
                                href: "#"
                            },
                            {
                                handle: "Launching Soon...",
                                platform: "LinkedIn",
                                icon: Linkedin,
                                href: "#"
                            },
                            {
                                handle: "Launching Soon...",
                                platform: "Instagram",
                                icon: Instagram,
                                href: "#"
                            },
                            {
                                handle: "support@finaize.com",
                                platform: "Email",
                                icon: Mail,
                                href: "mailto:support@finaize.com"
                            }
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href={item.href}
                                className="group flex items-center justify-between p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-cyan-500/30 hover:bg-zinc-900/60 transition-all duration-300 backdrop-blur-sm"
                            >
                                <span className="text-zinc-400 font-mono text-sm group-hover:text-cyan-400 transition-colors">
                                    {item.handle}
                                </span>

                                <div className="flex items-center gap-4 group-hover:scale-110 transition-transform duration-300">
                                    <span className="text-white font-bold tracking-wide">
                                        {item.platform}
                                    </span>
                                    <item.icon className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
