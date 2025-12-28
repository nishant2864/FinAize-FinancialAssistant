import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function DashboardNav() {
    return (
        <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-40">
            <div className="container flex h-16 items-center justify-between px-4">
                <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded bg-gradient-to-br from-cyan-400 to-blue-600" />
                    <span className="text-xl font-bold tracking-tight">FinAIze</span>
                </div>
                <div className="flex items-center gap-4">
                    <Link href="/dashboard" className="text-sm text-cyan-500 font-medium">Dashboard</Link>
                    <Link href="/dashboard/expenses" className="text-sm text-muted-foreground hover:text-white transition-colors">Expenses</Link>
                    <Link href="/dashboard/budget" className="text-sm text-muted-foreground hover:text-white transition-colors">Budget</Link>
                </div>
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center text-xs font-medium">NB</div>
                </div>
            </div>
        </nav>
    )
}
