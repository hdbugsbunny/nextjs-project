import EventList from "@/components/events/eventList";
import EventsSearch from "@/components/events/eventsSearch";
import { getAllEvents } from "@/helpers/utils";
import Head from "next/head";
import { useRouter } from "next/router";

export default function EventsPage(props) {
  const router = useRouter();
  const { events } = props;

  const findEventsHandler = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <Head>
        <title>NextJS Events App - All Events</title>
        <meta name="description" content="Discover all events" />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return { props: { events }, revalidate: 60 };
}
