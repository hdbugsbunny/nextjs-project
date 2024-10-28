import { signOut, useSession } from "next-auth/client";
import Link from "next/link";
import classes from "./mainNavigation.module.css";

export default function MainNavigation() {
  const [session, loading] = useSession();

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
                <button onClick={signOut}>Logout</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
