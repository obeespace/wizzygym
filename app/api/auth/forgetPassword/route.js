import { NextResponse } from "next/server";
import Fitfams from "../../../models/user";
import crypto from "crypto";
import nodemailer from "nodemailer";
import connectDb from "../../../util/dbConnect";

export async function POST(req) {
  await connectDb();

  try {
    const body = await req.json();
    const { email } = body;
    const user = await Fitfams.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { message: "Email not found" },
        { status: 404 }
      );
    }

    const resetCode = crypto.randomBytes(3).toString("hex"); // Generate 6-digit token
    const expires = Date.now() + 3600000; // 1 hour from now

    // Save the reset code and expiry to the user record
    user.resetPasswordCode = resetCode;
    user.resetPasswordExpires = expires;
    await user.save();

    // Send email to the user
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: user.email,
      subject: "Password Reset Code",
      html: `<p>Your password reset code is <b>${resetCode}</b>. It will expire in 1 hour.</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Reset code sent to email" });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error, Check connection and try again" },
      { status: 500 }
    );
  }
}