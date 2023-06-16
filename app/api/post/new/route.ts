import { connectToDB } from "@/utils/db";
import Post from "@/models/Post";

export async function POST(req: Request) {
    const parsedReq = await req.json()
    const { session, header, body } = parsedReq

    try {
        await connectToDB()
        const response = await Post.create({
            author: session.user.id,
            postHeader: header,
            postBody: body
        })

        return new Response(JSON.stringify(response), { status: 200 })
    } catch (err) {
        return new Response('Failed to post chat', { status: 500 })
    }
}