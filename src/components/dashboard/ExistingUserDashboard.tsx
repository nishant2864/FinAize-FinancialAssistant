'use client'

import { DashboardNav } from '@/components/DashboardNavbar'
import { ChatBot } from '@/components/ChatBot'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, TrendingUp, TrendingDown, DollarSign, Wallet } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'

const data = [
    { name: 'Jan', total: 1200 },
    { name: 'Feb', total: 900 },
    { name: 'Mar', total: 1600 },
    { name: 'Apr', total: 1100 },
    { name: 'May', total: 2100 },
    { name: 'Jun', total: 1400 },
]

export default function ExistingUserDashboard() {
    // This is the original dashboard content with mock data
    return (
        <div className="min-h-screen bg-black">
            <DashboardNav />
            <main className="container p-6 space-y-8">

                {/* Header Section */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
                        <p className="text-muted-foreground">Welcome back, Nishant. Here's your financial overview.</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="outline">Download Report</Button>
                        <Button variant="neon" className="gap-2">
                            <Plus className="h-4 w-4" /> Add Expense
                        </Button>
                    </div>
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="bg-zinc-900/50 border-white/10">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Total Balance</CardTitle>
                            <Wallet className="h-4 w-4 text-cyan-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white">₹1,24,592</div>
                            <p className="text-xs text-green-500 flex items-center mt-1">
                                <TrendingUp className="h-3 w-3 mr-1" /> +12% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-zinc-900/50 border-white/10">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Expenses</CardTitle>
                            <DollarSign className="h-4 w-4 text-red-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white">₹24,300</div>
                            <p className="text-xs text-red-500 flex items-center mt-1">
                                <TrendingUp className="h-3 w-3 mr-1" /> +4% from last month
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="bg-zinc-900/50 border-white/10">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Savings Goal</CardTitle>
                            <TrendingUp className="h-4 w-4 text-green-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white">₹50,000</div>
                            <div className="mt-2 h-2 w-full rounded-full bg-zinc-800">
                                <div className="h-2 w-[65%] rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">65% of your goal</p>
                        </CardContent>
                    </Card>
                    <Card className="bg-zinc-900/50 border-white/10">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">Active Budgets</CardTitle>
                            <DollarSign className="h-4 w-4 text-yellow-500" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-white">4</div>
                            <p className="text-xs text-muted-foreground mt-1">Food, Travel, Rent, Misc</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts & Recent Transactions */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4 bg-zinc-900/50 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white">Spending Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <div className="h-[300px]">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data}>
                                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                                        <XAxis dataKey="name" stroke="#888" fontSize={12} tickLine={false} axisLine={false} />
                                        <YAxis stroke="#888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `₹${value}`} />
                                        <Tooltip
                                            contentStyle={{ backgroundColor: '#18181b', border: '1px solid #27272a', borderRadius: '8px' }}
                                            cursor={{ fill: '#27272a' }}
                                        />
                                        <Bar dataKey="total" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="col-span-3 bg-zinc-900/50 border-white/10">
                        <CardHeader>
                            <CardTitle className="text-white">Recent Transactions</CardTitle>
                            <CardDescription>You made 24 transactions this month.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {[
                                    { name: 'Uber Trip', date: 'Today, 2:30 PM', amount: '-₹450', color: 'text-red-500' },
                                    { name: 'Salary Credit', date: 'Yesterday, 9:00 AM', amount: '+₹1,20,000', color: 'text-green-500' },
                                    { name: 'Zomato Orders', date: 'Yesterday, 8:15 PM', amount: '-₹850', color: 'text-red-500' },
                                    { name: 'Netflix Subscription', date: 'Dec 22', amount: '-₹649', color: 'text-red-500' },
                                    { name: 'Grocery Store', date: 'Dec 20', amount: '-₹2,400', color: 'text-red-500' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between">
                                        <div className="space-y-1">
                                            <p className="text-sm font-medium leading-none text-white">{item.name}</p>
                                            <p className="text-xs text-muted-foreground">{item.date}</p>
                                        </div>
                                        <div className={`font-medium ${item.color}`}>{item.amount}</div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

            </main>
            <ChatBot />
        </div>
    )
}
