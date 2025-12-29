import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import prisma from '@/lib/db/prisma'
import { verifyJWT } from '@/lib/auth/jwt'
import FirstTimeDashboard from '@/components/dashboard/FirstTimeDashboard'
import ExistingUserDashboard from '@/components/dashboard/ExistingUserDashboard'

export default async function DashboardPage() {
    const cookieStore = cookies()
    const token = cookieStore.get('token')?.value

    if (!token) {
        redirect('/auth/login')
    }

    const payload = await verifyJWT(token)
    if (!payload) {
        redirect('/auth/login')
    }

    const user = await prisma.user.findUnique({
        where: { id: payload.id },
        select: { isNewUser: true }
    })

    if (!user) {
        redirect('/auth/login')
    }

    if (user.isNewUser) {
        return <FirstTimeDashboard />
    }

    return <ExistingUserDashboard />
}
