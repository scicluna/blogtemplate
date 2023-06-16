'use client'
import { useEffect, useState } from "react"
import { ArticleStruct } from "./Article"
import Article from "./Article"

export default function PremierArticle() {
    const [premier, setPremier] = useState<ArticleStruct[]>()

    useEffect(() => {
        async function getPremier() {
            const response = await fetch('/api/post/premier')
            const premierjson = await response.json()

            if (premierjson) {
                setPremier(premierjson)
            } else {
                console.log("No premier article")
            }
        }
        getPremier()
    }, [])

    return (
        <>
            {premier
                ?
                <Article article={premier[0]} />
                :
                <div className="w-full h-full flex flex-col justify-center items-center text-center" >
                    <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-red-500"></div>
                </div>
            }
        </>
    )
}