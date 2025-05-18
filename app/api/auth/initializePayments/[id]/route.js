import { NextResponse } from "next/server";
import Fitfams from "../../../../models/user";
import Transaction from "../../../../models/transactions";
import axios from "axios";
import connectDb from "../../../../util/dbConnect";

export async function GET(req, { params }) {
  await connectDb();

  const reference = params.reference;

  if (!reference) {
    return NextResponse.json(
      { error: "Transaction reference is required" },
      { status: 400 }
    );
  }

  try {
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
      const transaction = await Transaction.findOne({ reference });
      if (!transaction) {
        return NextResponse.json(
          { error: "Transaction not found" },
          { status: 404 }
        );
      }

      const user = await Fitfams.findOne({ email: transaction.email });
      if (!user) {
        return NextResponse.json(
          { error: "User not found" },
          { status: 404 }
        );
      }

      user.subscription = "Active";
      await user.save();

      transaction.status = "success";
      await transaction.save();

      return NextResponse.json({
        message: "Payment verified and subscription updated",
        user,
      });
    } else {
      return NextResponse.json(
        { error: "Payment verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error(
      "Error Verifying Payment:",
      error.response?.data || error.message
    );
    return NextResponse.json(
      { error: "Failed to verify payment" },
      { status: 500 }
    );
  }
}