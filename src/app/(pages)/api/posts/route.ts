import PostsCash from "@/cash/PostsCash";
import PostModel from "@/model/PostModel";
import { PostsCashType } from "@/types/entities";
import RequestHandler from "@/util/RequestHandler";


export async function GET() {
  const handler = new RequestHandler<PostsCashType[]>(PostModel, PostsCash);
  return handler.GetAll();
}

export async function POST(req: Request) {
  const handler = new RequestHandler<PostsCashType[]>(PostModel, PostsCash);
  return handler.Post(req, "Post Created successfully");
}
