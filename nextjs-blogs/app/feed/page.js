import Blogs from "@/components/blogs";
import { getBlogs } from "@/lib/blogs";

export default async function FeedPage() {
  const blogs = await getBlogs();

  return (
    <>
      <h1>All Blogs by The Users!</h1>
      <Blogs blogs={blogs} />
    </>
  );
}
