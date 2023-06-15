'use client'
import { BuiltInProviderType } from "next-auth/providers"
import { signIn, signOut, useSession, getProviders, LiteralUnion, ClientSafeProvider } from "next-auth/react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoginPage() {
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null)
    const { data: session, status } = useSession()

    const isSessionLoading = status === 'loading'
    let reloading: boolean
    useEffect(() => {
        async function startNewProviders() {
            if (session && !isSessionLoading) {
                await signOut({ callbackUrl: '/' })
                reloading = true
            }
            if (providers == null && !isSessionLoading && !reloading) {
                const response = await getProviders()
                setProviders(response)
            }
        }
        startNewProviders()
    }, [isSessionLoading])

    return (
        <div className="flex flex-col gap-10 w-full h-full justify-center items-center pb-10 bg-red-50">
            {(providers && !isSessionLoading)
                ?
                Object.values(providers).map((provider) => (
                    <button type="button" key={provider.name} onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                        className="text-5xl text-red-200 bg-red-600 hover:text-black transition-all duration-300 p-2 rounded-full">
                        Sign In
                    </button>
                ))
                :
                (
                    <div className="w-full flex flex-col justify-center items-center text-center h-20" >
                        <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-red-500"></div>
                    </div>
                )}
        </div>
    )
}