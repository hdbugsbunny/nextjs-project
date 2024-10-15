import Link from "next/link";
import classes from "./eventItem.module.css";

export default function EventItem(props) {
  const { id, title, location, date, image } = props.event;
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");
  const formattedImage = `/${image}`;
  const formattedLink = `/events/${id}`;

  return (
    <li key={id} className={classes.item}>
      <img src={formattedImage} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={formattedLink}>Explore Event!</Link>
        </div>
      </div>
    </li>
  );
}
