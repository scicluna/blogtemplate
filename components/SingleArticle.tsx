import Article from "./Article"

type SingleArticleProps = {
    id: string
}

async function getSingle(id: string) {
    const response = await fetch(`${process.env.URL}/api/post/all/${id}`)
    return await response.json()
}

export default async function SingleArticle({ id }: SingleArticleProps) {
    const single = await getSingle(id)

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