import MeetupList from "@/components/meetups/meetupList";
import { MongoClient } from "mongodb";

// const DUMMY_LIST = [
//   {
//     id: "m3",
//     title: "Vue.js Meetup in Tokyo",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Vue_js_logo_2016.svg/1200px-Vue_js_logo_2016.svg.png",
//     address: "Tokyo, Japan",
//     description: "Learn more about Vue.js and join our meetup!",
//   },
// ];

export default function HomePage({ meetups }) {
  return (
    <>
      <MeetupList meetups={meetups} />
    </>
  );
}

export async function getStaticProps() {
  // Connect to MongoDB
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  if (!client) {
    return { props: { meetups: [] } };
  }

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupsData = await meetupsCollection.find().toArray();
  const meetups = meetupsData.map((meetup) => ({
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    address: meetup.address,
  }));

  // Close the MongoDB connection
  client.close();
  return { props: { meetups } };
}

// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   console.log("🚀 ~ getServerSideProps ~ { req, res }:", { req, res });

//   // Fetch data from an API
//   const meetups = DUMMY_LIST;

//   // Pass data to the page via props
//   return { props: { meetups } };
// }
