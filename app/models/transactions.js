import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    amount: { type: Number, required: true },
    reference: { type: String, required: true },
    status: { type: String, enum: ["success", "failed"], default: "failed" },
  },
  { timestamps: true }
);

// Prevent model overwrite upon hot-reload in development
const Transaction =
  mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

export default Transaction;