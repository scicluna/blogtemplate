'use client'
import { Carousel } from "flowbite-react"
import { useEffect, useState } from "react"
import { ArticleStruct } from "./Article"
import Link from "next/link"
import Article from "./Article"


export default function CarouselArea() {
    const [carouselArticles, setCarouselArticles] = useState<ArticleStruct[]>()

    useEffect(() => {
        async function getPremier() {
            const response = await fetch('/api/post/carousel')
            const carouseljson = await response.json()

            if (carouseljson) {
                setCarouselArticles(carouseljson.slice(1))
            } else {
                console.log("No premier article")
            }
        }
        getPremier()
    }, [])

    return (
        <div className="shadow-md shadow-red-200 bg-red-400 text-red-50 flex h-2/6 relative p-2">
            {carouselArticles
                ?
                <>
                    <Carousel slide={false}>
                        {carouselArticles.map((article) => {
                            return (
                                <Article article={article} key={article._id} />
                            )
                        })}
                    </Carousel>
                    <Link href={'/articles'} className="absolute bottom-1 right-1">All Articles</Link>
                </>
                :
                null
            }
        </div>
    )
}