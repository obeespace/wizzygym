import { NextResponse } from "next/server";
import Fitfams from "../../../models/user";
import connectDb from "../../../util/dbConnect";

export async function POST(req) {
  await connectDb();
  try {
    const { userId, trainer, reason } = await req.json();
    if (!userId || !trainer || !reason) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }
    // Store request for admin review in DB (append to user doc)
    const user = await Fitfams.findById(userId);
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });
    user.trainerChangeRequest = { trainer, reason, status: "pending" };
    await user.save();
    return NextResponse.json({ message: "Request submitted" });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  await connectDb();
  // For admin: get all users with a pending trainer change request
  const users = await Fitfams.find({ "trainerChangeRequest.status": "pending" });
  const requests = users.map(u => ({
    userId: u._id,
    trainer: u.trainerChangeRequest.trainer,
    reason: u.trainerChangeRequest.reason,
    nickname: u.nickname,
    email: u.email
  }));
  return NextResponse.json(requests);
}

export async function PUT(req) {
  await connectDb();
  try {
    const { userId, approve } = await req.json();
    const user = await Fitfams.findById(userId);
    if (!user || !user.trainerChangeRequest || user.trainerChangeRequest.status !== "pending") {
      return NextResponse.json({ message: "Request not found" }, { status: 404 });
    }
    if (approve) {
      user.trainer = user.trainerChangeRequest.trainer;
      user.trainerChangeRequest.status = "approved";
    } else {
      user.trainerChangeRequest.status = "disapproved";
    }
    await user.save();
    return NextResponse.json({ message: approve ? "Trainer updated" : "Request disapproved" });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
