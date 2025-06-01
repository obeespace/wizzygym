import mongoose from "mongoose";

const mealPlan = mongoose.Schema(
	{
		name: String,
		category: String,
	},
	{ timestamps: true },
);

const mealplan = mongoose.model("mealplan", mealPlan);

export default mealplan;