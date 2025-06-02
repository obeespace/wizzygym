import { NextResponse } from "next/server";
import Blog from "../../../../../models/blog";
import dbConnect from "../../../../../util/dbConnect";

export async function GET(req, { params }) {
  await dbConnect();
  const blog = await Blog.findById(params.id);
  if (!blog) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json(blog);
}

export async function PUT(req, { params }) {
  await dbConnect();
  const { title, content, imageUrl, videoUrl } = await req.json();
  const blog = await Blog.findByIdAndUpdate(
    params.id,
    { title, content, imageUrl, videoUrl },
    { new: true }
  );
  if (!blog) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json(blog);
}

export async function DELETE(req, { params }) {
  await dbConnect();
  const blog = await Blog.findByIdAndDelete(params.id);
  if (!blog) return NextResponse.json({ message: "Not found" }, { status: 404 });
  return NextResponse.json({ message: "Deleted" });
}