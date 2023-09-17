import Post from "@/models/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: any, response: any) => {
  console.log("response =>", response);
  try {
    await connect();
    const posts: any = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in response DB", { status: 500 });
  }
};
