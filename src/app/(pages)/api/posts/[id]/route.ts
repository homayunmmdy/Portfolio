import PostsCash from "@/cash/PostsCash";
import RequestHandler from "@/util/RequestHandler";
import PostModel from "@/model/PostModel";
import { PostsCashType } from "@/types/entities";

export async function GET(req: Request, { params }: { params: any }) {
  const { id } = params;
  const handler = new RequestHandler<PostsCashType[]>(PostModel, PostsCash);
  return handler.Get(id);
}

export async function PUT(req: Request, { params }: { params: any }) {
  const { id } = params;
  const handler = new RequestHandler<PostsCashType[]>(PostModel, PostsCash);
  return handler.PUT(id, req, "Post Update Successfully");
}

export async function DELETE(req: Request, { params }: { params: any }) {
  const { id } = params;
  const handler = new RequestHandler<PostsCashType[]>(PostModel, PostsCash);
  return handler.DELETE(id, "Post Deleted successfully");
}
