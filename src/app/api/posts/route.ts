import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import { PostType } from "../../../../types";

export const GET = async (request: Request, response: Response) => {
  const url = new URL(request.url);
  const username = url.searchParams.get("username");

  try {
    await connect();
    const posts: PostType[] = username ? await Post.find({ username }) : [];

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in response DB", { status: 500 });
  }
};

export const POST = async (request: Request, response: Response) => {
  const body = request.json();
  const newPost = new Post(body);

  try {
    await connect();
    await newPost.save();

    return new NextResponse("Post has been created", { status: 201 });
  } catch (error) {
    return new NextResponse("Error in DB", { status: 500 });
  }
};
