import EventContent from "@/components/eventDetail/eventContent";
import EventLogistics from "@/components/eventDetail/eventLogistics";
import EventSummary from "@/components/eventDetail/eventSummary";
import { getEventById, getFeaturedEvents } from "@/helpers/utils";

export default function EventDetailsPage(props) {
  const { event } = props;
  if (!event) {
    return <div className="center">Loading...</div>;
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

export async function getStaticProps(context) {
  const { eventId } = context.params;
  const event = await getEventById(eventId);
  if (!event) return { notFound: true };

  return { props: { event }, revalidate: 30 };
}

export async function getStaticPaths() {
  const events = await getFeaturedEvents();
  const paths = events.map((event) => ({ params: { eventId: event.id } }));

  return { paths, fallback: true };
}
