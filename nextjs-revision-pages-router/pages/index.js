import MeetupList from "@/components/meetups/meetupList";

const DUMMY_LIST = [
  {
    id: "m1",
    title: "NextJS Meetup in Berlin",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/1024px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg",
    address: "Berlin, Germany",
    description: "Join us for a free NextJS meetup!",
  },
  {
    id: "m2",
    title: "React Meetup in Paris",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1024px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    address: "Paris, France",
    description: "Discover the ReactJS community!",
  },
  {
    id: "m3",
    title: "Vue.js Meetup in Tokyo",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Vue_js_logo_2016.svg/1200px-Vue_js_logo_2016.svg.png",
    address: "Tokyo, Japan",
    description: "Learn more about Vue.js and join our meetup!",
  }
];

export default function HomePage({ meetups }) {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from an API
  const meetups = DUMMY_LIST;

  // Pass data to the page via props
  return { props: { meetups }, revalidate: 10 };
}

// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   console.log("🚀 ~ getServerSideProps ~ { req, res }:", { req, res });

//   // Fetch data from an API
//   const meetups = DUMMY_LIST;

//   // Pass data to the page via props
//   return { props: { meetups } };
// }
