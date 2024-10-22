import AllPosts from "@/components/posts/allPosts";
import { getAllPosts } from "@/helpers/postsUtils";

export default function PostsPage(props) {
  const { posts } = props;

  return <AllPosts posts={posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return { props: { posts: allPosts } };
}
