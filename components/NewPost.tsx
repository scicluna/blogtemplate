'use client'
import { useSession } from "next-auth/react"
import Link from "next/link"

export default function NewPost() {
    const { data: session } = useSession()

    return (
        <div className="flex flex-col justify-end items-center h-30 w-30 z-20 mr-5 bg-transparent">
            {session
                ?
                <Link href={"/newpost"} className=" text-red-200 hover:text-black transition-all duration-300 p-2 rounded-full">New Post</Link>
                :
                null
            }
        </div>
    )
}