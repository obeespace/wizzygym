import { NextResponse } from "next/server";
import dbConnect from "../../../../util/dbConnect";
import transact from "../../../../models/transactions";
import Fitfams from "../../../../models/user";
import axios from "axios";

export async function POST(req) {
  try {
    await dbConnect();
    const { reference } = await req.json();

    if (!reference) {
      return NextResponse.json({ error: "Transaction reference is required" }, { status: 400 });
    }

    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const paymentData = response.data.data;
    if (paymentData.status === "success") {
      // Update the user's subscription status
      const transaction = await transact.findOne({ reference });
      if (!transaction) {
        return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
      }

      const user = await Fitfams.findOne({ email: transaction.email });
      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      user.subscription = "Active";
      await user.save();

      transaction.status = "success";
      await transaction.save();

      return NextResponse.json({ message: "Payment verified and subscription updated", user }, { status: 200 });
    } else {
      return NextResponse.json({ error: "Payment verification failed" }, { status: 400 });
    }
  } catch (error) {
    console.error(
      "Error Verifying Payment:",
      error.response?.data || error.message
    );
    return NextResponse.json({ error: "Failed to verify payment" }, { status: 500 });
  }
}
