import EventList from "@/components/events/eventList";
import ResultsTitle from "@/components/events/resultsTitle";
import ErrorAlert from "@/components/ui/errorAlert";
import LinkButton from "@/components/ui/linkButton";
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
    return (
      <div className="center">
        <ErrorAlert>Invalid Date! Please Adjust Your Values!</ErrorAlert>
        <LinkButton href={"/events"}>Show All Events!</LinkButton>
      </div>
    );
  }

  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });
  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <div className="center">
        <ErrorAlert>No Events Found!</ErrorAlert>
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
