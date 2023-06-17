'use client'
import { useEffect, useState } from "react"
import { ArticleStruct } from "./Article"
import Article from "./Article"

type SingleArticleProps = {
    id: string
}

export default function SingleArticle({ id }: SingleArticleProps) {
    const [single, setSingle] = useState<ArticleStruct[]>()

    useEffect(() => {
        async function getSingle() {
            const response = await fetch(`/api/post/all/${id}`)
            const singleJson = await response.json()

            if (singleJson) {
                setSingle(singleJson)
            } else {
                console.log("No premier article")
            }
        }
        getSingle()
    }, [])

    return (
        <>
            {single
                ?
                <Article article={single[0]} short={false} />
                :
                <div className="w-full h-full flex flex-col justify-center items-center text-center" >
                    <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-red-500"></div>
                </div>
            }
        </>
    )
}