import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "./blogData";
import KrutBlog from "./KrutBlog";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) return <h2>Blog not found</h2>;

  return <KrutBlog blog={blog} />;
};

export default BlogPage;
