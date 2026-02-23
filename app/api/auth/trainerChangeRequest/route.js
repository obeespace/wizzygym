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
    const user = await Fitfams.findByIdAndUpdate(
      userId,
      { $set: { trainerChangeRequest: { trainer, reason, status: "pending" } } },
      { new: true, select: "_id" }
    ).lean();

    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    return NextResponse.json({ message: "Request submitted" });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  await connectDb();
  // For admin: get all users with a pending trainer change request
  const users = await Fitfams.find({ "trainerChangeRequest.status": "pending" })
    .select("trainerChangeRequest nickname email")
    .lean();
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

    const update = approve
      ? {
          $set: {
            trainer: "$trainerChangeRequest.trainer",
            "trainerChangeRequest.status": "approved",
          },
        }
      : {
          $set: {
            "trainerChangeRequest.status": "disapproved",
          },
        };

    let user;

    if (approve) {
      const pendingUser = await Fitfams.findOne(
        { _id: userId, "trainerChangeRequest.status": "pending" },
        { "trainerChangeRequest.trainer": 1 }
      ).lean();

      if (!pendingUser) {
        return NextResponse.json({ message: "Request not found" }, { status: 404 });
      }

      user = await Fitfams.findOneAndUpdate(
        { _id: userId, "trainerChangeRequest.status": "pending" },
        {
          $set: {
            trainer: pendingUser.trainerChangeRequest.trainer,
            "trainerChangeRequest.status": "approved",
          },
        },
        { new: true, select: "_id" }
      ).lean();
    } else {
      user = await Fitfams.findOneAndUpdate(
        { _id: userId, "trainerChangeRequest.status": "pending" },
        update,
        { new: true, select: "_id" }
      ).lean();
    }

    if (!user) {
      return NextResponse.json({ message: "Request not found" }, { status: 404 });
    }

    return NextResponse.json({ message: approve ? "Trainer updated" : "Request disapproved" });
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
