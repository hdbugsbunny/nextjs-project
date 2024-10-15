import EventList from "@/components/eventList";
import { getFeaturedEvents } from "@/dummyData";

export default function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
}
