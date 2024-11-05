import Link from "next/link";
import styles from "./mainNavigation.module.css";

export default function MainNavigation() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>NextJS Meetups!</div>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>All Meetups</Link>
          </li>
          <li>
            <Link href={"/newMeetup"}>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
