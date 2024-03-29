import connectDB from "@/lib/db";
import UserModel from "@/model/userModel";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
  await connectDB();

  try {
    const { userName, email, password } = await request.json();
    console.log(userName, email);

    const hashedPassword = await bcrypt.hash(password, 10);

    await UserModel.create({ userName, email, password: hashedPassword });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
