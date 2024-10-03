import NewsList from "@/components/newsList";

export default async function NewsPage() {
  const response = await fetch("http://localhost:8080/news");
  if (!response.ok) {
    throw new Error("Failed to Fetch News!");
  }
  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
