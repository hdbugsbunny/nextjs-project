import EventContent from "@/components/eventDetail/eventContent";
import EventLogistics from "@/components/eventDetail/eventLogistics";
import EventSummary from "@/components/eventDetail/eventSummary";
import { getEventById } from "@/dummyData";
import { useRouter } from "next/router";

export default function EventDetailsPage() {
  const router = useRouter();
  const { eventId } = router.query;
  const event = getEventById(eventId);
  if (!event) {
    return <p>Event Not Found!</p>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics event={event} />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}
