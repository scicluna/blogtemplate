'use client'
import { useEffect, useState } from "react"
import { ArticleStruct } from "./Article"
import Article from "./Article"

export default function EveryArticle() {
    const [all, setAll] = useState<ArticleStruct[]>()

    useEffect(() => {
        async function getAll() {
            const response = await fetch(`/api/post/all`)
            const allJson = await response.json()

            if (allJson) {
                setAll(allJson)
            } else {
                console.log("No premier article")
            }
        }
        getAll()
    }, [])

    return (
        <>
            {all
                ?
                <>
                    {all.map((article) => {
                        return (
                            <Article article={article} key={article._id} />
                        )
                    })}
                </>
                :
                <div className="w-full min-h-[100dvh] flex flex-col justify-start items-center text-center" >
                    <div className="animate-spin rounded-full mt-40 h-20 w-20 border-t-2 border-b-2 border-red-500"></div>
                </div>
            }
        </>
    )
}