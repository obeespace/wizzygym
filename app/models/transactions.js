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

transactionSchema.index({ reference: 1 });
transactionSchema.index({ email: 1, createdAt: -1 });

// Prevent model overwrite upon hot-reload in development
const Transaction =
  mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);

export default Transaction;