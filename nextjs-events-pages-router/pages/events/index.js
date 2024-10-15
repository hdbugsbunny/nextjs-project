import EventList from "@/components/events/eventList";
import { getAllEvents } from "@/dummyData";

export default function EventsPage() {
  const allEvents = getAllEvents();

  return (
    <div>
      <EventList events={allEvents} />
    </div>
  );
}
