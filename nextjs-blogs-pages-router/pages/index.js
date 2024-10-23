import FeaturedPosts from "@/components/homePage/featuredPosts";
import Hero from "@/components/homePage/hero";
import { getFeaturedPosts } from "@/helpers/postsUtils";
import Head from "next/head";

export default function HomePage(props) {
  const { posts } = props;

  return (
    <>
      <Head>
        <title>Harshit's Blog | Home</title>
        <meta
          name="description"
          content="Welcome to Harshit's blog! I post about programming and web development!"
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return { props: { posts: featuredPosts } };
}
