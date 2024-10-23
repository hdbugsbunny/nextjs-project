import Image from "next/image";
import ReactMarkdown from "react-markdown";
import classes from "./postContent.module.css";
import PostHeader from "./postHeader";

export default function PostContent({ post }) {
  const formattedImage = `/images/posts/${post.image}`;
  const customComponents = {
    // img: ({ src, alt }) => (
    //   <Image src={`/images/posts/${src}`} alt={alt} width={600} height={300} />
    // ),
    p: ({ children }) => {
      if (children.type === "img") {
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${children.props.src}`}
              alt={children.props.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }

      return <p>{children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={formattedImage} />
      <ReactMarkdown components={customComponents}>
        {post.content}
      </ReactMarkdown>
    </article>
  );
}
