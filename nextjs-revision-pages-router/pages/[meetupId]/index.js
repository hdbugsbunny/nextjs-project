import MeetupDetail from "@/components/meetups/meetupDetail";

export default function MeetupDetailPage() {
  const meetup = {
    id: "m1",
    title: "NextJS Meetup in Berlin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/1024px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg",
    address: "Berlin, Germany",
    description: "Join us for a free NextJS meetup!",
  };

  return <MeetupDetail {...meetup} />;
}
