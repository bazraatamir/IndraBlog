import connectDB from "@/app/utils/db";
import category from "@/model/category";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    await connectDB();
    await category.create({ title, description });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}

export async function GET(req) {
  try {
    await connectDB();
    const data = await category.find();
    console.log(data);
    return NextResponse.json({ message: "success", data });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
