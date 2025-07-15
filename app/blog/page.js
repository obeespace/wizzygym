"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function getExcerpt(text, lines = 2) {
  return text.split("\n").slice(0, lines).join(" ").slice(0, 120) + "...";
}

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/auth/admin/postBlog")
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  if (!blogs.length) return <div className="text-center py-8">Loading...</div>;

  const [latest, ...rest] = blogs;

  return (
    <div className="w-11/12 mx-auto mt-10 text-black p-4">
      <p className="text-3xl text-white my-8">Still in Production!!!</p>
      {/* Latest post on top */}
      <div className="border-2 border-gray-800 bg-white text-black rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-semibold mb-2">{latest.title}</h2>
        {latest.imageUrl && (
          <img
            src={latest.imageUrl}
            alt=""
            className="w-full mb-4 rounded"
          />
        )}
        <p className="mb-4">{getExcerpt(latest.content, 3)}</p>
        <Link href={`/blog/${latest._id}`}>
          <button className="border border-gray-500 text-black px-4 py-2 rounded hover:bg-gray-200 transition">
            Read More
          </button>
        </Link>
      </div>

      {/* Rest in 2 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rest.map((blog) => (
          <div
            key={blog._id}
            className="border border-gray-300 rounded-lg p-4 bg-gray-800 text-white shadow-sm"
          >
            <h3 className="text-xl font-medium mb-2">{blog.title}</h3>
            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt=""
                className="w-full mb-3 rounded"
              />
            )}
            <p className="mb-3">{getExcerpt(blog.content)}</p>
            <Link href={`/blog/${blog._id}`}>
              <button className="text-black bg-white px-4 py-2 rounded hover:bg-gray-200 transition">
                Read More
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
