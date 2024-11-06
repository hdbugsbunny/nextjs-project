import MeetupList from "@/components/meetups/meetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";

export default function HomePage({ meetups }) {
  return (
    <>
      <Head>
        <title>Next.js Meetup App</title>
        <meta name="description" content="Find and share local meetups" />
      </Head>
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
