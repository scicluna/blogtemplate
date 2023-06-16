import { connectToDB } from "@/utils/db";
import Post from "@/models/Post";

export async function GET(request: Request) {
    try {
        await connectToDB()
        const premierPost = await Post.find().limit(1).populate("author").sort({ createdAt: 'desc' })

        if (!premierPost) return new Response("No posts found", { status: 404 })

        return new Response(JSON.stringify(premierPost), { status: 200 })
    } catch (err) {
        return new Response('Cannot grab post', { status: 500 })
    }
}