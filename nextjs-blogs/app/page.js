import Blogs from "@/components/blogs";
import { getBlogs } from "@/lib/blogs";
import { Suspense } from "react";

export const metadata = {
  title: "NextJS Latest Blogs | Home",
  description: "Discover Our Amazing Blogs!",
};

async function LatestBlogs() {
  const latestBlogs = await getBlogs(2);
  return <Blogs blogs={latestBlogs} />;
}

export default function Home() {
  return (
    <>
      <h1>Welcome Back!</h1>
      <p>Here&apos;s What You Might&apos;ve Missed.</p>
      <section id="latest-blogs">
        <Suspense fallback={<p>Loading Recent Blogs...</p>}>
          <LatestBlogs />
        </Suspense>
      </section>
    </>
  );
}
