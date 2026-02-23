import mongoose from "mongoose";

const mealPlan = mongoose.Schema(
	{
		name: String,
		category: String,
	},
	{ timestamps: true },
);

mealPlan.index({ category: 1 });

const mealplan = mongoose.models.mealplan || mongoose.model("mealplan", mealPlan);

export default mealplan;