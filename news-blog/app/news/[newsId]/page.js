import { DUMMY_NEWS } from "@/dummyNews";

export default function NewsDetailPage({ params }) {
  const { newsId } = params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.newsId === newsId);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
