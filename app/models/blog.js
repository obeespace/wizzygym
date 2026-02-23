import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: String, // optional
    videoUrl: String, // optional
  },
  { timestamps: true }
);

BlogSchema.index({ createdAt: -1 });

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);