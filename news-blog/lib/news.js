import sql from "better-sqlite3";

const newsDB = sql("data.db");

export async function getAllNews() {
  const news = newsDB.prepare("SELECT * FROM news").all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsById(newsId) {
  const newsItem = newsDB
    .prepare("SELECT * FROM news WHERE newsId =?")
    .get(newsId);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return newsItem;
}

export async function getLatestNews() {
  const latestNews = newsDB
    .prepare("SELECT * FROM news ORDER BY date DESC LIMIT 3")
    .all();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return latestNews;
}

export async function getAvailableNewsYears() {
  const years = newsDB
    .prepare("SELECT DISTINCT strftime('%Y', date) as year FROM news")
    .all()
    .map((year) => year.year);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return years;
}

export function getAvailableNewsMonths(year) {
  return newsDB
    .prepare(
      "SELECT DISTINCT strftime('%m', date) as month FROM news WHERE strftime('%Y', date) = ?"
    )
    .all(year)
    .map((month) => month.month);
}

export async function getNewsForYear(year) {
  const news = newsDB
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? ORDER BY date DESC"
    )
    .all(year);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}

export async function getNewsForYearAndMonth(year, month) {
  const news = newsDB
    .prepare(
      "SELECT * FROM news WHERE strftime('%Y', date) = ? AND strftime('%m', date) = ? ORDER BY date DESC"
    )
    .all(year, month);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return news;
}
