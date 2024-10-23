import AllPosts from "@/components/posts/allPosts";
import { getAllPosts } from "@/helpers/postsUtils";
import Head from "next/head";

export default function PostsPage(props) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Harshit's Blog | Posts</title>
        <meta
          name="description"
          content="Check out my latest blog posts on programming and web development!"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return { props: { posts: allPosts } };
}
