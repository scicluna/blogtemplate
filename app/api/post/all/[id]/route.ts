import { connectToDB } from "@/utils/db";
import Post from "@/models/Post";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

export async function GET(request: Request, { params }: Params) {
    console.log("hi")
    const { id } = params
    try {
        await connectToDB()
        const singlePost = await Post.find({
            id: id
        }).populate("author")

        if (!singlePost) return new Response("No post found", { status: 404 })

        return new Response(JSON.stringify(singlePost), { status: 200 })
    } catch (err) {
        return new Response('Cannot grab post', { status: 500 })
    }
}