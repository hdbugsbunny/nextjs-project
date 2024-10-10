import { useRouter } from "next/router";

export default function BlogPostsPage() {
  const router = useRouter();
  console.log("🚀 ~ BlogPostsPage ~ router:", router);

  return (
    <div>
      <h1>Blog Posts Page</h1>
      <p>This is the blog posts page.</p>
    </div>
  );
}
