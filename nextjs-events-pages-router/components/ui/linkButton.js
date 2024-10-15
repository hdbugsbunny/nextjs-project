import Link from "next/link";
import classes from "./linkButton.module.css";

export default function LinkButton(props) {
  const { children, href } = props;

  return (
    <Link href={href} className={classes.btn}>
      {children}
    </Link>
  );
}
