import { NextResponse } from "next/server";
import MealPlan from "../../../../models/mealPlan";
import connectDb from "../../../../util/dbConnect";

export async function POST(req) {
  await connectDb();
  try {
    const body = await req.json();
    const { name, category, calories, ingredients } = body;
    if (!name || !category) {
      return NextResponse.json({ message: "Name and description are required." }, { status: 400 });
    }
    const newMeal = new MealPlan({ name, category, calories, ingredients });
    await newMeal.save();
    return NextResponse.json({ message: "Meal added successfully.", meal: newMeal }, { status: 201 });
  } catch (error) {
    console.error("Error adding meal:", error);
    return NextResponse.json({ message: "Server error. Please try again later." }, { status: 500 });
  }
}
