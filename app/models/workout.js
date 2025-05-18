import mongoose from "mongoose";

const HomeTrainingSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    reps: String,
    sets: String,
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot-reload in development
const HomeExercise =
  mongoose.models.HomeExercise || mongoose.model("HomeExercise", HomeTrainingSchema);

export default HomeExercise;