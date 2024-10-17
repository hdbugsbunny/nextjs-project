import EventList from "@/components/events/eventList";
import ResultsTitle from "@/components/events/resultsTitle";
import ErrorAlert from "@/components/ui/errorAlert";
import LinkButton from "@/components/ui/linkButton";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";
// import { getFilteredEvents } from "@/helpers/utils";

export default function EventsFilteredPage() {
  const [loadedEvents, setLoadedEvents] = useState();
  const router = useRouter();
  const { slug } = router.query;
  const { data, error } = useSWR(
    "https://nextjs-temp-course-default-rtdb.firebaseio.com/events.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const events = [];
      for (const key in data) {
        events.push({ id: key, ...data[key] });
      }

      setLoadedEvents(events);
    }
  }, [data]);

  if (!slug || !loadedEvents) {
    return <p className="center">Loading...</p>;
  }

  const numYear = +slug[0];
  const numMonth = +slug[1];
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2023 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12 ||
    error
  ) {
    return (
      <div className="center">
        <ErrorAlert>Invalid Date! Please Adjust Your Values!</ErrorAlert>
        <LinkButton href={"/events"}>Show All Events!</LinkButton>
      </div>
    );
  }

  const filteredEvents = loadedEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === numYear &&
      eventDate.getMonth() === numMonth - 1
    );
  });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="center">
        <ErrorAlert>No Events Found for the Given Date!</ErrorAlert>
        <LinkButton href={"/events"}>Show All Events!</LinkButton>
      </div>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}

// export async function getServerSideProps(context) {
//   const { slug } = context.params;
//   if (!slug) {
//     return { notFound: true };
//   }

//   const numYear = +slug[0];
//   const numMonth = +slug[1];
//   if (
//     isNaN(numYear) ||
//     isNaN(numMonth) ||
//     numYear < 2023 ||
//     numYear > 2030 ||
//     numMonth < 1 ||
//     numMonth > 12
//   ) {
//     return { props: { hasDateError: true } };
//   }

//   const events = await getFilteredEvents({ year: numYear, month: numMonth });
//   if (!events || events.length === 0) {
//     return { props: { hasEventError: true } };
//   }

//   return { props: { events, numYear, numMonth } };
// }
