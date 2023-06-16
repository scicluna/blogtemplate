import { connectToDB } from "@/utils/db";
import Post from "@/models/Post";

export async function GET(request: Request) {
    try {
        await connectToDB()
        const carouselPosts = await Post.find().limit(6).populate("author").sort({ createdAt: 'desc' })

        if (!carouselPosts) return new Response("No posts found", { status: 404 })

        return new Response(JSON.stringify(carouselPosts), { status: 200 })
    } catch (err) {
        return new Response('Cannot grab post', { status: 500 })
    }
}