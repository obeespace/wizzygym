import { NextResponse } from "next/server";
import Fitfams from "../../../models/user";
import connectDb from "../../../util/dbConnect";

export async function GET() {
  await connectDb();

  try {
    // Retrieve all users, excluding passwords
    const users = await Fitfams.find({})
      .select("-password")
      .sort({ createdAt: -1 })
      .lean();
    return NextResponse.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}