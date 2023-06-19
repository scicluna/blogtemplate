import Article from "./Article"

async function getPremier() {
    const response = await fetch(`${process.env.URL}/api/post/premier`)
    return await response.json()
}

export default async function PremierArticle() {
    const premier = await getPremier()

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