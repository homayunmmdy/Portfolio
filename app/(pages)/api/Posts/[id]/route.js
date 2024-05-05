import Post from "@/app/models/Post";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

  const foundPost = await Post.findOne({ _id: id });
  return NextResponse.json({ foundPost }, { status: 200 });
}