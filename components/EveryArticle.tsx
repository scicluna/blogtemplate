import { ArticleStruct } from "./Article"
import Article from "./Article"

async function getAll() {
    const response = await fetch(`${process.env.URL}/api/post/all`)
    return await response.json()
}

export default async function EveryArticle() {
    const all = await getAll()

    return (
        <>
            {all.map((article: ArticleStruct) => {
                return (
                    <Article article={article} key={article._id} />
                )
            })}
        </>
    )
}