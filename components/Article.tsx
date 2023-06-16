'use client'
import Link from "next/link"
import { useState, useEffect } from "react"

export type ArticleStruct = {
    _id: string
    author: {
        email: string
        username: string
        image: string
        createdAt: string
        updatedAt: string
    },
    postHeader: string
    postBody: string
    postImages?: string[]
    createdAt: string
    updatedAt: string
}
type ArticleProps = {
    article: ArticleStruct
}

export default function Article({ article }: ArticleProps) {
    const [bodyWidth, setBodyWidth] = useState<number>(window.innerWidth / .7)

    useEffect(() => {
        function handleResize() {
            setBodyWidth(window.innerWidth / .7);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    function shortBody(postBody: string) {
        if (bodyWidth > postBody.length) {
            return (
                <h3 className="text-sm">{postBody}</h3>
            )
        } else {
            const newBody = postBody.slice(0, bodyWidth) + '...'
            return (
                <>
                    <h3 className="text-sm">{newBody} <Link className="text-sm text-blue-300 hover:text-blue-500 font-extrabold" href={`/articles/${article._id}`}>Read More</Link></h3>

                </>
            )
        }
    }

    return (
        <div className="flex flex-col p-2 overflow-hidden">
            <div className="flex gap-2 items-center">
                <h1 className="font-extrabold text-3xl">{article.postHeader}</h1>
                <h2 className="font-serif">{article.author.username}</h2>
                <h2 className="font-serif">{article.updatedAt}</h2>
            </div>
            <div className="overflow-auto relative h-full">
                {shortBody(article.postBody)}
            </div>
        </div>
    )
}