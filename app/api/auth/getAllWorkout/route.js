import { NextResponse } from "next/server";
import HomeExercise from "../../../models/workout";
import connectDb from "../../../util/dbConnect";

export async function GET() {
  await connectDb();

  try {
    // Fetch all workouts from the database
    const workouts = await HomeExercise.find().sort({ createdAt: -1 }).lean();

    // If no workouts found, send an appropriate response
    if (!workouts || workouts.length === 0) {
      return NextResponse.json(
        { message: "No workouts found." },
        { status: 404 }
      );
    }

    // Send back the workouts
    return NextResponse.json(workouts);
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return NextResponse.json(
      { message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}