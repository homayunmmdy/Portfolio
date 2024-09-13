import PostsCash from "@/cash/PostsCash";
import PostModel from "@/model/PostModel";
import RequestHandler from "@/util/RequestHandler";

export async function GET() {
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.GetAll();
}

//@ts-ignore
export async function POST(req) {
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.Post(req, "Post Created successfully");
}
