import { createBlog } from "@/actions/blogs";
import BlogForm from "@/components/blog-form";

export default function NewBlogPage() {
  return <BlogForm action={createBlog} />;
}
