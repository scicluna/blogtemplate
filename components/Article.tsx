import Link from "next/link"

export type ArticleStruct = {
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

    function shortBody(postBody: string) {
        //cut off the body at some point and create a link that leads to the full article
        //start with arbitrary characters and see how it looks
        //cutoff needs to be dynamic with viewport
        let newBody = ""
        for (let i = 0; i < postBody.length; i++) {
            if (i < 700) newBody += postBody[i]
        }
        newBody += `...`

        return (
            <>
                <h3>{newBody}</h3>
                <Link href={'/article/id'}>Read More...</Link>
            </>
        )
    }

    return (
        <div className="flex flex-col p-2 overflow-hidden">
            <div className="flex gap-2 items-center">
                <h1 className="font-extrabold text-3xl">{article.postHeader}</h1>
                <h2 className="font-serif">{article.author.username}</h2>
                <h2 className="font-serif">{article.updatedAt}</h2>
            </div>
            <h1>{shortBody(article.postBody)}</h1>
        </div>
    )
}