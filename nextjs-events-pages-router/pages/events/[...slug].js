import EventList from "@/components/events/eventList";
import { getFilteredEvents } from "@/dummyData";
import { useRouter } from "next/router";

export default function EventsFilteredPage() {
  const router = useRouter();
  const { slug } = router.query;
  if (!slug) {
    return <p className="center">Loading!!!</p>;
  }

  const numYear = +slug[0];
  const numMonth = +slug[1];
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2023 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return <p className="center">Invalid Date! Please Adjust Your Values!</p>;
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return <p className="center">No Events Found!</p>;
  }

  return (
    <div>
      <EventList events={filteredEvents} />
    </div>
  );
}
