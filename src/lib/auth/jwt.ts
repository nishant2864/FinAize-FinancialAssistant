import { SignJWT, jwtVerify } from 'jose'

const secret = new TextEncoder().encode(
    process.env.NEXTAUTH_SECRET || 'supersecretchangeit'
)

export async function signJWT(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(secret)
}

export async function verifyJWT(token: string) {
    try {
        const { payload } = await jwtVerify(token, secret)
        return payload
    } catch (error) {
        return null
    }
}
