import connectDB from "@/lib/db";
import category from "@/model/category";
import { NextResponse } from "next/server";
import nextCors from "next-cors";
const cors = nextCors({
  // Only allow requests from a certain origin
  origin: "https://example.com",
  methods: ["GET", "POST", "OPTIONS"], // Allow only specific methods
});
export async function POST(req, res) {
  await cors(req, res);
  try {
    const { title, description } = await request.json();
    await connectDB();
    await category.create({ title, description });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "error", error });
  }
}
