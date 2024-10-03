import { getNewsById } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function NewsDetailPage({ params }) {
  const { newsId } = params;
  const newsItem = await getNewsById(newsId);
  if (!newsItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.newsId}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
