import Image from "next/image";
import AddressIcon from "../icons/addressIcon";
import DateIcon from "../icons/dateIcon";
import classes from "./eventLogistics.module.css";
import LogisticsItem from "./logisticsItem";

export default function EventLogistics(props) {
  const { title, location, date, image } = props.event;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedAddress = location.replace(", ", "\n");

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image src={`/${image}`} alt={title} width={400} height={400} />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{formattedDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{formattedAddress}</address>
        </LogisticsItem>
      </ul>
    </section>
  );
}
