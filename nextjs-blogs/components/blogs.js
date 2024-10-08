"use client";

import { toggleBlogLikeStatus } from "@/actions/blogs";
import { formatDate } from "@/lib/format";
import Image from "next/image";
import { useOptimistic } from "react";
import LikeButton from "./like-icon";

function imageLoader(config) {
  const [urlStart, urlEnd] = config.src.split("upload/");
  const transformations = `w_200,q_${config.quality}`;
  return `${urlStart}upload/${transformations}/${urlEnd}`;
}

function Blog({ blog, action }) {
  return (
    <article className="blog">
      <div className="blog-image">
        <Image
          loader={imageLoader}
          src={blog.image}
          alt={blog.title}
          width={200}
          height={120}
          quality={50}
        />
      </div>
      <div className="blog-content">
        <header>
          <div>
            <h2>{blog.title}</h2>
            <p>
              Shared by {blog.userFirstName} on{" "}
              <time dateTime={blog.createdAt}>
                {formatDate(blog.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, blog.id)}
              className={blog.isLiked ? "liked" : ""}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{blog.content}</p>
      </div>
    </article>
  );
}

export default function Blogs({ blogs }) {
  const [optimisticBlogs, updateOptimisticBlogs] = useOptimistic(
    blogs,
    (prevBlogs, updatedBlogId) => {
      const updatedBlogs = [...prevBlogs];
      const updatedBlog = updatedBlogs.find((b) => b.id === updatedBlogId);
      if (updatedBlog) {
        updatedBlog.likes = updatedBlog.likes + (updatedBlog.isLiked ? -1 : 1);
        updatedBlog.isLiked = !updatedBlog.isLiked;
      }
      return updatedBlogs;
    }
  );

  if (!optimisticBlogs || optimisticBlogs.length === 0) {
    return <p>There are no blogs yet. Maybe start sharing some?</p>;
  }

  async function updateLikes(blogId) {
    updateOptimisticBlogs(blogId);
    await toggleBlogLikeStatus(blogId);
  }

  return (
    <ul className="blogs">
      {optimisticBlogs.map((blog) => (
        <li key={blog.id}>
          <Blog blog={blog} action={updateLikes} />
        </li>
      ))}
    </ul>
  );
}
