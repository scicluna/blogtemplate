'use client'
import { useRef } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function NewPostForm() {
    const { data: session } = useSession()
    const { push } = useRouter()
    const header = useRef<HTMLInputElement>(null)
    const body = useRef<HTMLTextAreaElement>(null)

    async function submitBlogPost(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!header.current || !body.current || !session) return
        if (!header.current.value || !body.current.value) return

        const response = await fetch('/api/post/new', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ session: session, header: header.current.value, body: body.current.value })
        })

        if (!response.ok) {
            console.error('Failed to Post')
        } else {
            push('/')
        }
    }

    return (
        <form className="shadow-md shadow-red-200 h-4/6 relative font-extrabold text-lg flex flex-col gap-5 px-2 py-4 bg-red-300" onSubmit={e => submitBlogPost(e)} >
            <div className="flex justify-between">
                <input ref={header} name="title" type="text" className="w-1/2 outline-red-600 p-1 border border-red-200" required placeholder="Title..."></input>
                <button type="submit" className=" text-black hover:text-red-600 transition-all duration-300 p-2 rounded-full">Submit</button>
            </div>
            <textarea ref={body} rows={20} placeholder="Blog Post..." required className="outline-red-600 p-1 border border-red-200" />
        </form>
    )
}