import FormSubmit from "@/components/form-submit";
import { storeBlog } from "@/lib/blogs";
import { redirect } from "next/navigation";

export default function NewBlogPage() {
  async function createBlog(formData) {
    "use server";
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");

    await storeBlog({ imageUrl: "", title, content, userId: 1 });
    redirect("/feed");
  }

  return (
    <>
      <h1>Create A New Blog</h1>
      <form action={createBlog}>
        <p className="form-control">
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" />
        </p>
        <p className="form-control">
          <label htmlFor="image">Image URL:</label>
          <input type="file" accept="image/*" id="image" name="image" />
        </p>
        <p className="form-control">
          <label htmlFor="content">Content:</label>
          <textarea id="content" name="content" rows="5" />
        </p>
        <p className="form-actions">
          <FormSubmit />
        </p>
      </form>
    </>
  );
}
