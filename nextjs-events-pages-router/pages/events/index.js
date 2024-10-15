import EventList from "@/components/events/eventList";
import EventsSearch from "@/components/events/eventsSearch";
import { getAllEvents } from "@/dummyData";

export default function EventsPage() {
  const allEvents = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList events={allEvents} />
    </>
  );
}
