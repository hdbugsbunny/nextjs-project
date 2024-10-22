import AllPosts from "@/components/posts/allPosts";

const DUMMY_POSTS = [
  {
    id: "getting-started-nextjs",
    title: "Getting Started With NextJS",
    createdAt: "2024-08-22",
    image: "getting-started-nextjs.png",
    description:
      "NextJS is a React Framework for production, development & ships with built-in SSR features.",
  },
  {
    id: "nextjs-file-based-routing",
    title: "NextJS File Based Routing",
    createdAt: "2024-10-22",
    image: "nextjs-file-based-routing.png",
    description:
      "NextJS File Based Routing for smooth routing and doesn't require any third party libraries.",
  },
];

export default function PostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}
