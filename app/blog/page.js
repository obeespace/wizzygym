"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

function getExcerpt(text, lines = 2) {
  // Simple excerpt: first 120 chars or first 2 lines
  return text.split("\n").slice(0, lines).join(" ").slice(0, 120) + "...";
}

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/auth/admin/postBlog")
      .then(res => res.json())
      .then(setBlogs);
  }, []);

  if (!blogs.length) return <div>Loading...</div>;

  const [latest, ...rest] = blogs;

  return (
    <div style={{ maxWidth: 900, margin: "auto" }}>
      {/* Latest post on top */}
      <div style={{
        border: "2px solid #333",
        marginBottom: 24,
        padding: 16,
        borderRadius: 8,
        background: "blue"
      }}>
        <h2>{latest.title}</h2>
        {latest.imageUrl && <img src={latest.imageUrl} alt="" style={{ maxWidth: "100%", marginBottom: 8 }} />}
        <p>{getExcerpt(latest.content, 3)}</p>
        <Link href={`/blog/${latest._id}`}>
          <button style={{ marginTop: 8 }}>Read More</button>
        </Link>
      </div>

      {/* Rest in 2 columns */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 16
      }}>
        {rest.map(blog => (
          <div key={blog._id} style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 12,
            background: "#fff"
          }}>
            <h3>{blog.title}</h3>
            {blog.imageUrl && <img src={blog.imageUrl} alt="" style={{ maxWidth: "100%", marginBottom: 8 }} />}
            <p>{getExcerpt(blog.content)}</p>
            <Link href={`/blog/${blog._id}`}>
              <button style={{ marginTop: 8 }}>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}