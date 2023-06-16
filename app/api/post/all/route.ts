import { connectToDB } from "@/utils/db";
import Post from "@/models/Post";

export async function GET(request: Request) {
    try {
        await connectToDB()
        const allPosts = await Post.find().populate("author").sort({ createdAt: 'desc' })

        if (!allPosts) return new Response("No posts found", { status: 404 })

        return new Response(JSON.stringify(allPosts), { status: 200 })
    } catch (err) {
        return new Response('Cannot grab post', { status: 500 })
    }
}