import Link from "next/link";
import classes from "./linkButton.module.css";

export default function LinkButton(props) {
  const { children, href, onClick } = props;

  return href ? (
    <Link href={href} className={classes.btn}>
      {children}
    </Link>
  ) : (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}
