import { NextResponse } from "next/server";
import Fitfams from "../../../models/user";
import bcryptjs from "bcryptjs";
import connectDb from "../../../util/dbConnect";

export async function POST(req) {
  await connectDb();

  try {
    const body = await req.json();
    const { email, newPassword } = body;
    const user = await Fitfams.findOne({ email }).select(
      "password resetPasswordCode resetPasswordExpires"
    );

    if (!user) {
      return NextResponse.json(
        { message: "User not found" },
        { status: 404 }
      );
    }

    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(newPassword, salt);
    user.resetPasswordCode = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    return NextResponse.json({ message: "Password successfully changed" });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, Check connection and try again" },
      { status: 500 }
    );
  }
}