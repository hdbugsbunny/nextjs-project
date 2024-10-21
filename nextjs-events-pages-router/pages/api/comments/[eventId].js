import {
  connectDatabase,
  getDataFromDatabase,
  insertDataToDatabase,
} from "@/helpers/utils";

export default async function handler(req, res, next) {
  const { eventId } = req.query;
  let client;
  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Error Connecting to The Database" });
    return;
  }

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
      client.close();
      return;
    }

    // Store the comment in the database
    const newComment = { email, name, comment, eventId };
    try {
      await insertDataToDatabase(client, "comments", newComment);
      res.status(201).json({ message: "Comment Added!", comment: newComment });
    } catch (error) {
      res.status(500).json({ message: "Error Saving Comment" });
    }
  } else {
    // Fetch all the event comments from the database
    // (e.g., using MongoDB, Redis, or a third-party service)
    // and return them as JSON response
    let comments;
    try {
      comments = await getDataFromDatabase(
        client,
        "comments",
        { _id: -1 },
        { eventId }
      );
      res.status(200).json({ message: "Comments Fetched!", comments });
    } catch (error) {
      res.status(500).json({ message: "Error Fetching Comments" });
    }
  }

  client.close();
}
