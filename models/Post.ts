import { Schema, model, models } from "mongoose";

const PostSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    postHeader: {
        type: String
    },
    postBody: {
        type: String
    },
    postImages: {
        type: [String]
    }
},
    {
        timestamps: true
    }
);

const Post = models.Post || model("Post", PostSchema);
export default Post