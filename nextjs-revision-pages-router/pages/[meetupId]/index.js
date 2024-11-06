import MeetupDetail from "@/components/meetups/meetupDetail";

export default function MeetupDetailPage({ meetup }) {
  return <MeetupDetail {...meetup} />;
}

export async function getStaticPaths() {
  // Fetch data from an API
  const meetupIds = ["m1", "m2"];

  // Generate paths for all meetup IDs
  const paths = meetupIds.map((id) => ({
    params: { meetupId: id },
  }));

  // Return paths
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  // Fetch data from an API
  const meetup = {
    id: meetupId,
    title: "NextJS Meetup in Berlin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/1024px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg",
    address: "Berlin, Germany",
    description: "Join us for a free NextJS meetup!",
  };

  // Pass data to the page via props
  return { props: { meetup } };
}
