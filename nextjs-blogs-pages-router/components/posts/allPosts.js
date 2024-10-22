import classes from "./allPosts.module.css";
import PostsGrid from "./postsGrid";

export default function AllPosts({ posts }) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}
