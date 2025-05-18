import { NextResponse } from "next/server";
import Fitfams from "../../../../models/user";
import connectDb from "../../../../util/dbConnect";

export async function GET(req, { params }) {
  await connectDb();

  try {
    const userId = params.id;

    // Fetch the user from the database by ID, exclude password
    const user = await Fitfams.findById(userId).select("-password");

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}