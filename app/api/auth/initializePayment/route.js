import { NextResponse } from "next/server";
import transact from "../../../models/transactions";
import axios from "axios";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, amount } = body;

    if (!email || !amount) {
      return NextResponse.json({ error: "Email and amount are required" }, { status: 400 });
    }

    const response = await axios.post(
      "https://api.paystack.co/transaction/initialize",
      { email, amount },
      {
        headers: {
          Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const newTransaction = new transact({
      email,
      amount,
      reference: response.data.data.reference,
    });
    await newTransaction.save();

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    console.error(
      "Error Initializing Payment:",
      error.response?.data || error.message
    );
    return NextResponse.json({ error: "Failed to initialize payment" }, { status: 500 });
  }
}
