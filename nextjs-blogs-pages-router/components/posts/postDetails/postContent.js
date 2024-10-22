import classes from "./postContent.module.css";
import PostHeader from "./postHeader";

const DUMMY_POST = {
  id: "getting-started-nextjs",
  title: "Getting Started With NextJS",
  createdAt: "2024-08-22",
  image: "getting-started-nextjs.png",
  description:
    "NextJS is a React Framework for production, development & ships with built-in SSR features.",
  content: "# This is a sample post",
};

export default function PostContent() {
  const formattedImage = `/images/posts/${DUMMY_POST.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_POST.title} image={formattedImage} />
      {DUMMY_POST.content}
    </article>
  );
}
