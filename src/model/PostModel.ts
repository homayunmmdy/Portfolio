import mongoose, { Schema } from "mongoose";
//@ts-ignore
mongoose.connect(process.env.MONGODB_URI);
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

const PostModel =
  mongoose.models.Post || mongoose.model("Post", postSchema);

export default PostModel;
