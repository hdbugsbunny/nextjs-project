import { MongoClient } from "mongodb";

export default async function handler(req, res, next) {
  const { eventId } = req.query;
  const client = await MongoClient.connect(process.env.MONGODB_URI);

  if (req.method === "POST") {
    // Add the event comments of particular eventId in the database
    // (e.g., using MongoDB, Redis, or a third-party service)
    const { email, name, comment } = req.body;
    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid Inputs!" });
      return;
    }

    // Store the comment in the database
    const newComment = { email, name, comment, eventId };
    const db = client.db();
    await db.collection("comments").insertOne(newComment);
    client.close();
    res.status(201).json({ message: "Comment Added!", comment: newComment });
    return;
  }
  // Fetch the event comments from the database
  // (e.g., using MongoDB, Redis, or a third-party service)
  // and return them as JSON response
  const db = client.db();
  const comments = await db
    .collection("comments")
    .find()
    .sort({ _id: -1 })
    .toArray();
  client.close();
  res.status(200).json({ message: "Comments Fetched!", comments });
}
