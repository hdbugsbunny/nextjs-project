import NewsList from "@/components/newsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/lib/news";
import Link from "next/link";
import { Suspense } from "react";

async function FilterHeader({ year, month }) {
  let links = await getAvailableNewsYears();
  if (
    (year && !(await getAvailableNewsYears())) ||
    (month && !getAvailableNewsMonths(year))
  ) {
    throw new Error("Invalid Period Filter!");
  }

  if (year && !month) {
    links = getAvailableNewsMonths(year);
  }

  if (year && month) {
    links = [];
  }

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            const href = year ? `/archive/${year}/${link}` : `/archive/${link}`;
            return (
              <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

async function FilteredNews({ year, month }) {
  let news,
    newsContent = <p>No News Found For The Selected Period!</p>;

  if (year && !month) {
    news = await getNewsForYear(year);
  } else if (year && month) {
    news = await getNewsForYearAndMonth(year, month);
  }

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  return newsContent;
}

export default async function FilteredNewsPage({ params }) {
  const { filter } = params;
  const selectedYear = filter?.[0],
    selectedMonth = filter?.[1];

  return (
    <>
      <Suspense fallback={<p>Fetching Filter...</p>}>
        <FilterHeader year={selectedYear} month={selectedMonth} />
      </Suspense>
      <Suspense
        fallback={
          selectedYear && selectedMonth ? (
            <p>Fetching Selected Month News...</p>
          ) : selectedYear && !selectedMonth ? (
            <p>Fetching Selected Year List...</p>
          ) : (
            <p>Fetching List...</p>
          )
        }
      >
        <FilteredNews year={selectedYear} month={selectedMonth} />
      </Suspense>
    </>
  );
}
