import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import UserModel from "@/model/userModel";
import connectDB from "@/app/utils/db";

export async function PUT(req) {
  try {
    const userEmail = getServerSession();
    console.log(userEmail);
    return NextResponse.json({ message: "success" });
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
}
