import { NextResponse } from "next/server";
import BlogModel from "@/model/BlogModel";
import connectDB from "@/app/utils/db";
export async function GET(req) {
  try {
    await connectDB();
    const Blog = await BlogModel.find({});
    return NextResponse.json({ message: "success", Blog });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}

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
