import EventList from "@/components/events/eventList";
import ResultsTitle from "@/components/events/resultsTitle";
import ErrorAlert from "@/components/ui/errorAlert";
import LinkButton from "@/components/ui/linkButton";
import { getFilteredEvents } from "@/helpers/utils";

export default function EventsFilteredPage(props) {
  const { hasDateError, hasEventError, events, numYear, numMonth } = props;
  if (hasDateError) {
    return (
      <div className="center">
        <ErrorAlert>Invalid Date! Please Adjust Your Values!</ErrorAlert>
        <LinkButton href={"/events"}>Show All Events!</LinkButton>
      </div>
    );
  }
  if (hasEventError) {
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
      <EventList events={events} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;
  if (!slug) {
    return { notFound: true };
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
    return { props: { hasDateError: true } };
  }

  const events = await getFilteredEvents({ year: numYear, month: numMonth });
  if (!events || events.length === 0) {
    return { props: { hasEventError: true } };
  }

  return { props: { events, numYear, numMonth } };
}
