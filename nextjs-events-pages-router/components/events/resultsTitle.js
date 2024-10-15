import LinkButton from "../ui/linkButton";
import classes from "./resultsTitle.module.css";

export default function ResultsTitle(props) {
  const { date } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1>Events in {formattedDate}</h1>
      <LinkButton href={"/events"}>Show all events</LinkButton>
    </section>
  );
}
