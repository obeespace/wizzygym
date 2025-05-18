import mongoose from "mongoose";

const FitfamSchema = new mongoose.Schema(
  {
    fullname: String,
    nickname: String,
    gender: String,
    bodygoals: String,
    email: String,
    password: String,
    phoneNumber: Number,
    subscription: String,
    trainer: String,
    resetPasswordCode: String, // Store reset code
    resetPasswordExpires: Date, // Expiry date for the reset code
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot-reload in development
const Fitfams = mongoose.models.Fitfam || mongoose.model("Fitfam", FitfamSchema);

export default Fitfams;