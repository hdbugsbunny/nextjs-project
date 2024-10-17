import EventList from "@/components/events/eventList";
import { getFeaturedEvents } from "@/helpers/utils";

export default function HomePage(props) {
  const { events } = props;

  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return { props: { events }, revalidate: 1800 };
}
