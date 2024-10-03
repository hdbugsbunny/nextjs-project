import { DUMMY_NEWS } from "@/dummyNews";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function NewsDetailPage({ params }) {
  const { newsId } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.newsId === newsId);
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
