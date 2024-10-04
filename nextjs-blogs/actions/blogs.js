"use server";

import { storeBlog } from "@/lib/blogs";
import { uploadImage } from "@/lib/cloudinary";
import { redirect } from "next/navigation";

export async function createBlog(_, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");
  let errors = [];
  if (!title || title.trim().length === 0) {
    errors.push("Title is required!");
  }
  if (!image || image.size === 0) {
    errors.push("Image is required!");
  }
  if (!content || content.trim().length === 0) {
    errors.push("Content is required!");
  }

  if (errors.length > 0) {
    return { errors };
  }

  let imageUrl = "";
  try {
    imageUrl = await uploadImage(image);
  } catch (error) {
    throw new Error(
      "Image Upload Failed, Blog Was Not Created. Please Try Again Later!"
    );
  }

  await storeBlog({ imageUrl, title, content, userId: 1 });
  redirect("/feed");
}
