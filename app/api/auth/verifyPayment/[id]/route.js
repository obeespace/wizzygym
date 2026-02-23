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
      const transaction = await transact
        .findOne({ reference })
        .select("email amount")
        .lean();

      if (!transaction) {
        return NextResponse.json({ error: "Transaction not found" }, { status: 404 });
      }

      const user = await Fitfams
        .findOne({ email: transaction.email })
        .select("_id serviceEndDate trainer")
        .lean();

      if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      // Determine plan duration from amount
      let durationDays = 0;
      if (transaction.amount === 2000 * 100) durationDays = 1;
      else if (transaction.amount === 15000 * 100) durationDays = 30;
      else if (transaction.amount === 40000 * 100) durationDays = 90;
      else durationDays = 1; // fallback

      // If user already has an active subscription, extend it
      const now = new Date();
      let baseDate = now;
      if (user.serviceEndDate && new Date(user.serviceEndDate) > now) {
        baseDate = new Date(user.serviceEndDate);
      }

      const nextServiceEndDate = new Date(
        baseDate.getTime() + durationDays * 24 * 60 * 60 * 1000
      );

      const updatedFields = {
        serviceEndDate: nextServiceEndDate,
        subscription: "Active",
      };

      // Assign a random trainer if user is new or subscription is being renewed
      if (!user.trainer || user.trainer === "New User") {
        const trainers = ["Wisdom", "Jon", "Panther"];
        updatedFields.trainer = trainers[Math.floor(Math.random() * trainers.length)];
      }

      const updatedUser = await Fitfams.findByIdAndUpdate(user._id, updatedFields, {
        new: true,
      })
        .select("fullname nickname email subscription trainer serviceEndDate")
        .lean();

      await transact.updateOne({ reference }, { $set: { status: "success" } });

      return NextResponse.json(
        { message: "Payment verified and subscription updated", user: updatedUser },
        { status: 200 }
      );
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
