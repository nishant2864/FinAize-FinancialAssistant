'use client'

import { motion } from 'framer-motion'
import { Target, Users, Lightbulb } from 'lucide-react'

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-zinc-900/10 -z-10" />
            <div className="absolute right-0 top-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
            <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        About FinAIze
                    </h2>
                    <p className="text-zinc-400">
                        We are on a mission to democratize financial intelligence. By combining advanced AI technology with intuitive design, we help you take control of your financial future.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Target,
                            title: "Mission",
                            description: "To empower individuals with enterprise-grade financial tools and insights.",
                            color: "text-red-400"
                        },
                        {
                            icon: Users,
                            title: "Community",
                            description: "Building a network of financially savvy individuals learning and growing together.",
                            color: "text-yellow-400"
                        },
                        {
                            icon: Lightbulb,
                            title: "Innovation",
                            description: "Constantly pushing the boundaries of what's possible in fintech.",
                            color: "text-cyan-400"
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group p-8 rounded-3xl bg-zinc-900/30 border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:bg-zinc-900/60 backdrop-blur-sm"
                        >
                            <div className="h-14 w-14 rounded-2xl bg-zinc-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <item.icon className={`w-7 h-7 ${item.color}`} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-zinc-400 leading-relaxed font-light">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
