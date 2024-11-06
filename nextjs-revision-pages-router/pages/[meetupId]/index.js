import MeetupDetail from "@/components/meetups/meetupDetail";
import { MongoClient, ObjectId } from "mongodb";

export default function MeetupDetailPage({ meetup }) {
  return <MeetupDetail {...meetup} />;
}

export async function getStaticPaths() {
  // Connect to MongoDB
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  if (!client) {
    return { paths: [], fallback: false };
  }

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupIds = await meetupsCollection.find({}, { _id: 1 }).toArray();

  // Generate paths for all meetup IDs
  const paths = meetupIds.map((doc) => ({
    params: { meetupId: doc._id.toString() },
  }));

  // Return paths
  client.close();
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;

  // Connect to MongoDB
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  if (!client) {
    return { props: { meetup: null } };
  }

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetupData = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  if (!meetupData) {
    return { props: { meetup: null } };
  }

  const meetup = {
    id: meetupData._id.toString(),
    title: meetupData.title,
    image: meetupData.image,
    address: meetupData.address,
    description: meetupData.description,
  };

  // Pass data to the page via props
  client.close();
  return { props: { meetup } };
}
