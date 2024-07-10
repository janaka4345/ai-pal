'use client'
import { signOut } from 'next-auth/react'

export default function page() {
    const handleClick = async () => {
        await signOut({ callbackUrl: '/' })
    }
    return (
        <div className="mt-10">
            <button onClick={handleClick}>signout</button>
        </div>
    )
}
