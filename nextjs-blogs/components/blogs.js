import { formatDate } from "@/lib/format";
import LikeButton from "./like-icon";

function Blog({ blog }) {
  return (
    <article className="blog">
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />
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
            <LikeButton />
          </div>
        </header>
        <p>{blog.content}</p>
      </div>
    </article>
  );
}

export default function Blogs({ blogs }) {
  if (!blogs || blogs.length === 0) {
    return <p>There are no blogs yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="blogs">
      {blogs.map((blog) => (
        <li key={blog.id}>
          <Blog blog={blog} />
        </li>
      ))}
    </ul>
  );
}
