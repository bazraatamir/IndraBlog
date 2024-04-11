import { NextResponse } from "next/server";
import BlogModel from "@/model/BlogModel";
import connectDB from "@/lib/db";
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
