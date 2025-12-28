'use client'

import Link from 'next/link'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { User } from 'lucide-react'

export function Navbar() {

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <div className="fixed top-0 left-0 right-0 z-[100] flex justify-center w-full">
            <nav
                className="flex items-center justify-between px-6 py-4 w-full bg-black/40 backdrop-blur-xl border-b border-white/5"
            >
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="relative h-16 w-16 flex items-center justify-center">
                        <Image
                            src="/FinAIze_Logo.png"
                            alt="FinAIze Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Center Nav Items */}
                <div className="hidden md:flex items-center gap-1 bg-black/20 p-1 rounded-full border border-white/5 backdrop-blur-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/10"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right User Section */}
                <div className="flex items-center gap-4">
                    <Link href="/auth/login" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer z-50">
                        Login
                    </Link>
                    <Link href="/auth/register" className="hidden sm:block cursor-pointer z-50">
                        <div className="relative inline-flex h-9 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors">
                                Get Started
                            </span>
                        </div>
                    </Link>
                </div>
            </nav>
        </div>
    )
}
