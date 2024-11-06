import { MongoClient } from "mongodb";

export default async function handler(req, res, next) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed!" });
    return;
  }

  // Connect to MongoDB
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  if (!client) {
    res.status(500).json({ message: "Failed to connect to MongoDB!" });
    return;
  }

  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  // Extract meetup data from the request body
  const { title, image, address, description } = req.body;
  if (!title || !image || !address || !description) {
    res.status(422).json({ message: "Invalid Input!" });
    client.close();
    return;
  }

  // Insert the meetup into the database
  const result = await meetupsCollection.insertOne({
    title,
    image,
    address,
    description,
    createdAt: new Date(),
  });
  if (!result.acknowledged) {
    res.status(500).json({ message: "Failed to Insert Meetup!" });
    client.close();
    return;
  }

  // Close the MongoDB connection
  client.close();

  // Return the inserted meetup ID
  res
    .status(201)
    .json({
      id: result.insertedId.toString(),
      message: "Successfully Inserted Meetup!",
    });
}
