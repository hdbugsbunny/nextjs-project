import EventContent from "@/components/eventDetail/eventContent";
import EventLogistics from "@/components/eventDetail/eventLogistics";
import EventSummary from "@/components/eventDetail/eventSummary";
import { getAllEvents, getEventById } from "@/helpers/utils";

export default function EventDetailsPage(props) {
  const { event } = props;

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

export async function getStaticProps(context) {
  const { eventId } = context.params;
  const event = await getEventById(eventId);
  if (!event) return { notFound: true };

  return { props: { event } };
}

export async function getStaticPaths() {
  const events = await getAllEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return { paths, fallback: false };
}
