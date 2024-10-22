import FeaturedPosts from "@/components/homePage/featuredPosts";
import Hero from "@/components/homePage/hero";
import { getFeaturedPosts } from "@/helpers/postsUtils";

export default function HomePage(props) {
  const { posts } = props;

  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return { props: { posts: featuredPosts } };
}
