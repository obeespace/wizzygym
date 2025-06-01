import { NextResponse } from "next/server";
import Blog from "../../../../models/blog";
import dbConnect from "../../../../util/dbConnect";

export async function GET() {
  await dbConnect();
  const blogs = await Blog.find().sort({ createdAt: -1 });
  return NextResponse.json(blogs);
}

export async function POST(req) {
  await dbConnect();
  const { title, content, imageUrl, videoUrl } = await req.json();
  if (!title || !content)
    return NextResponse.json({ message: "Title and content required" }, { status: 400 });
  const blog = await Blog.create({ title, content, imageUrl, videoUrl });
  return NextResponse.json(blog, { status: 201 });
}