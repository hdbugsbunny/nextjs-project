"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./navLink.module.css";

export default function NavLink(props) {
  const { href, children } = props;
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={
        pathName.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
