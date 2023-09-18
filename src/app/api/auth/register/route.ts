import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { RequestBodyRegisterType } from "../../../../../types";

export const POST = async (request: Request) => {
  const { name, email, password }: RequestBodyRegisterType =
    await request.json();

  if (!name || !email || !password) {
    return new NextResponse("Name, email, and password are required", {
      status: 400,
    });
  }

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch (error) {
    return new NextResponse((error as Error).message, {
      status: 500,
    });
  }
};
