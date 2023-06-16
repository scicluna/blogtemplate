'use client'
import { BuiltInProviderType } from "next-auth/providers"
import { signIn, signOut, useSession, getProviders, LiteralUnion, ClientSafeProvider } from "next-auth/react"
import { useState, useEffect } from "react"

export default function Login() {
    const [providers, setProviders] = useState<Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null>(null)
    const { data: session, status } = useSession()

    const isSessionLoading = status === 'loading'
    useEffect(() => {
        async function startNewProviders() {
            if (providers == null && !isSessionLoading) {
                const response = await getProviders()
                setProviders(response)
            }
        }
        startNewProviders()
    }, [isSessionLoading])


    return (
        <div className="flex flex-col justify-end items-center h-30 w-40 z-20 mr-5 bg-transparent">
            {(providers && !isSessionLoading && !session)
                ?
                Object.values(providers).map((provider) => (
                    <button type="button" key={provider.name} onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                        className=" text-red-200 hover:text-black transition-all duration-300 p-2 rounded-full">
                        Sign In
                    </button>
                ))
                :
                session
                    ?
                    (
                        <button type="button" onClick={() => signOut()}
                            className=" text-red-200 hover:text-black transition-all duration-300 p-2 rounded-full">
                            Logout
                        </button>
                    )
                    :
                    (
                        <div className="p-2" >
                            <div className="animate-bounce border-red-500 w-full h-full text-red-200">...........</div>
                        </div>
                    )}
        </div>
    )
}