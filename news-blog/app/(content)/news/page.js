"use client";

import NewsList from "@/components/newsList";
import { useEffect, useState } from "react";

export default function NewsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");
      if (!response.ok) {
        setError("Failed to fetch news");
        setIsLoading(false);
        return;
      }

      const data = await response.json();
      setNews(data);
      setIsLoading(false);
    }

    fetchNews();
  }, []);

  if (isLoading) return <p>Fetching News...</p>;
  if (error) return <p>Error: {error}</p>;

  let newsContent;
  if (news) newsContent = <NewsList news={news} />;

  return (
    <>
      <h1>News Page</h1>
      {newsContent}
    </>
  );
}
