import EventList from "@/components/events/eventList";
import { getFeaturedEvents } from "@/dummyData";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}
