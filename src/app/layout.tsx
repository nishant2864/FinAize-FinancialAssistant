import type { Metadata } from 'next'
import { Poppins, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'

const poppins = Poppins({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
    title: 'FinAIze - AI Financial Assistant',
    description: 'Your personal AI-powered financial assistant.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={cn("min-h-screen bg-background font-sans antialiased", poppins.variable, jetbrainsMono.variable)}>
                {children}
            </body>
        </html>
    )
}
