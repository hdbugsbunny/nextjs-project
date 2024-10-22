import ReactMarkdown from "react-markdown";
import classes from "./postContent.module.css";
import PostHeader from "./postHeader";

export default function PostContent({ post }) {
  const formattedImage = `/images/posts/${post.image}`;

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={formattedImage} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}
