import mongoose, { Schema } from "mongoose";
mongoose.connect(process.env.MONGODB_URI as string);
mongoose.Promise = global.Promise;

const postSchema = new Schema(
  {
    title: String,
    imgurl: String,
    description: String,
    body: String,
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.Post || mongoose.model("Post", postSchema);

export default Post;