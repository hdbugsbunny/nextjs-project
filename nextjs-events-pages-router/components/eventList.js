import EventItem from "./eventItem";
import classes from "./eventList.module.css";

export default function EventList(props) {
  const { events } = props;

  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem event={event} />
      ))}
    </ul>
  );
}
