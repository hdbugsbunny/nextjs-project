import classes from "./eventContent.module.css";

export default function EventContent(props) {
  const { children } = props;

  return <section className={classes.content}>{children}</section>;
}
