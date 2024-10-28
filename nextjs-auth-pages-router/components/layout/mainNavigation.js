import { useSession } from "next-auth/react";
import Link from "next/link";
import classes from "./mainNavigation.module.css";

export default function MainNavigation() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <header className={classes.header}>
      <Link href={"/"}>
        <div className={classes.logo}>NextJS Auth</div>
      </Link>
      <nav>
        <ul>
          {!session && !loading && (
            <li>
              <Link href={"/auth"}>Login</Link>
            </li>
          )}
          {session && (
            <>
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
