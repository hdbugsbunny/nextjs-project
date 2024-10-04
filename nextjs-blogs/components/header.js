import logo from "@/assets/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <header id="main-header">
      <Link href="/">
        <img src={logo.src} alt="Mobile phone with blogs feed on it" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/feed">Feed</Link>
          </li>
          <li>
            <Link className="cta-link" href="/new-blog">
              New Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
