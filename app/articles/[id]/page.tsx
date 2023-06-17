import SingleArticle from "@/components/SingleArticle"

type IndividualArticleProps = {
    params: {
        id: string
    }
}

export default function IndividualArticle({ params }: IndividualArticleProps) {
    return (
        <main className="shadow-md shadow-red-200 h-4/6 relative font-extrabold text-lg flex flex-col gap-5 px-2 py-4 bg-red-200">
            <SingleArticle id={params.id} />
        </main>
    )
}