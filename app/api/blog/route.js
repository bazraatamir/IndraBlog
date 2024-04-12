import { NextResponse } from "next/server";
import BlogModel from "@/model/BlogModel";
import connectDB from "@/app/utils/db";
export async function POST(req) {
  try {
    const { title, fileName, description } = await req.json();
    await connectDB();
    let Blog = await BlogModel.create({
      title: title,
      ImageUrl: fileName,
      Description: description,
    });
    return NextResponse.json({
      message: " create Blog successfully",
      Blog,
    });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
}
export async function GET(req) {
  try {
    let Blog = await BlogModel.find();

    console.log(Blog);
    return NextResponse.json({
      message: " get all Blog successfully",
      Blog,
    });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
