import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connect from "@/utils/db";
import { PostType } from "../../../../../types";

export const GET = async (
  request: Request,
  response: { params: { id: string } }
) => {
  const {
    params: { id },
  } = response;

  try {
    await connect();
    const posts: PostType[] | null = await Post.findById(id);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in response of DB", { status: 500 });
  }
};

export const DELETE = async (
  request: Request,
  response: { params: { id: string } }
) => {
  const {
    params: { id },
  } = response;

  try {
    await connect();
    await Post.findByIdAndDelete(id);

    return new NextResponse("Post has been deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Error in response of DB", { status: 500 });
  }
};
