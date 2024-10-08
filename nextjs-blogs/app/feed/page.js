import Blogs from "@/components/blogs";
import { getBlogs } from "@/lib/blogs";

export async function generateMetadata() {
  const blogs = await getBlogs();
  const numberOfBlogs = blogs.length;

  return {
    title: `NextJS ${numberOfBlogs} Blogs | Feed`,
    description: "Discover Amazing Blogs From Our Community!",
  };
}

export default async function FeedPage() {
  const blogs = await getBlogs();

  return (
    <>
      <h1>All Blogs by The Users!</h1>
      <Blogs blogs={blogs} />
    </>
  );
}
