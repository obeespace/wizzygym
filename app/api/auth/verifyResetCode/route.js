import { NextResponse } from "next/server";
import Fitfams from "../../../models/user";
import connectDb from "../../../util/dbConnect";

export async function POST(req) {
  await connectDb();

  try {
    const body = await req.json();
    const { email, resetCode } = body;

    const user = await Fitfams.findOne({
      email,
      resetPasswordCode: resetCode,
    })
      .select("resetPasswordExpires")
      .lean();

    if (!user) {
      return NextResponse.json(
        { message: "Invalid or expired reset code" },
        { status: 400 }
      );
    }

    if (Date.now() > user.resetPasswordExpires) {
      return NextResponse.json(
        { message: "Reset code has expired" },
        { status: 400 }
      );
    }

    return NextResponse.json({ message: "Code verified", verified: true });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, Check connection and try again" },
      { status: 500 }
    );
  }
}