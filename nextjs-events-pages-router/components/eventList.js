import EventItem from "./eventItem";

export default function EventList(props) {
  const { events } = props;

  return (
    <ul>
      {events.map((event) => (
        <EventItem event={event} />
      ))}
    </ul>
  );
}
