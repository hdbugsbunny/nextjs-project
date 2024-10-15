import AddressIcon from "../icons/addressIcon";
import ArrowRightIcon from "../icons/arrowRightIcon";
import DateIcon from "../icons/dateIcon";
import LinkButton from "../ui/linkButton";
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
    <li className={classes.item}>
      <img src={formattedImage} alt={title} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{formattedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <LinkButton href={formattedLink}>
            <span>Explore Event!</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </LinkButton>
        </div>
      </div>
    </li>
  );
}
