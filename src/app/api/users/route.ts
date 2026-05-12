import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import User from "@/lib/models/User";

export async function GET() {
  await dbConnect();
  const users = await User.find({});
  return NextResponse.json({ success: true, data: users });
}
