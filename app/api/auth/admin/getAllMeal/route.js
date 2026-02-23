import { NextResponse } from "next/server";
import MealPlan from "../../../../models/mealPlan";
import connectDb from "../../../../util/dbConnect";

export async function GET() {
  await connectDb();

  try {
    // Fetch all meals from the database
    const meals = await MealPlan.find().sort({ createdAt: -1 }).lean();

    // If no meals found, send an appropriate response
    if (!meals || meals.length === 0) {
      return NextResponse.json(
        { message: "No meals found." },
        { status: 404 }
      );
    }

    // Send back the meals
    return NextResponse.json(meals);
  } catch (error) {
    console.error("Error fetching meals:", error);
    return NextResponse.json(
      { message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
