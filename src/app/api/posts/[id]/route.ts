import PostsCash from "@/cash/PostsCash";
import PostModel from "@/model/PostModel";
import RequestHandler from "@/util/RequestHandler";

//@ts-ignore
export async function GET(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.Get(id);
}

//@ts-ignore
export async function PUT(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.PUT(id, req, "Post Update Successfully");
}

//@ts-ignore
export async function DELETE(req, { params }) {
  const { id } = params;
  const handler = new RequestHandler(PostModel, PostsCash);
  return handler.DELETE(id, "Post Deleted successfully");
}