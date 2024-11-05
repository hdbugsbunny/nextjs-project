import { useRouter } from "next/router";

export default function NewsDetailPage() {
  const router = useRouter();
  const { newsId } = router.query;
  if (!newsId) return <p>Loading...</p>;

  return (
    <div>
      <h1>News Detail Page</h1>
      <p>This is the news detail page.</p>
    </div>
  );
}
