import { getAvailableNewsYears } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }) {
  const { filter } = params;
  const links = getAvailableNewsYears();
  // const news = getNewsForYear(year);

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );

  // return <NewsList news={news} />;
}
