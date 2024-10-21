import EventList from "@/components/events/eventList";
import NewsletterRegistration from "@/components/input/newsletterRegistration";
import { getFeaturedEvents } from "@/helpers/utils";
import Head from "next/head";

export default function HomePage(props) {
  const { events } = props;

  return (
    <div>
      <Head>
        <title>NextJS Events App</title>
        <meta
          name="description"
          content="Discover and book your favorite events"
        />
      </Head>
      <NewsletterRegistration />
      <EventList events={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();

  return { props: { events }, revalidate: 1800 };
}
