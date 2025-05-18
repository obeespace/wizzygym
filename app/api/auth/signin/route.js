import { NextResponse } from "next/server";
import Fitfams from "../../../models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import connectDb from "@/app/util/dbConnect";

export async function POST(req) {
  await connectDb();

  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await Fitfams.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: "No User found, Signup!" },
        { status: 401 }
      );
    }

    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { message: "Invalid email or password" },
        { status: 401 }
      );
    }

    // Handle admin token
    let adminToken = "";
    if (email === "obeewon20@gmail.com") {
      adminToken = "runjozi";
    }

    const token = jwt.sign({ id: user.id }, process.env.SECRET, {
      expiresIn: "1h",
    });

    return NextResponse.json({
      message: "Successful Login",
      token,
      admintoken: adminToken,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, Check connection and try again" },
      { status: 500 }
    );
  }
}