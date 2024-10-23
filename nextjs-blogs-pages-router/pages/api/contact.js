import { MongoClient } from "mongodb";

export default async function handler(req, res, next) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (
      !name ||
      name.trim() === "" ||
      !email ||
      !email.includes("@") ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "All Fields Are Required!" });
      return;
    }

    const newMessage = { name, email, message };
    // Save the new message to the MongoDB database
    let client;
    try {
      client = await MongoClient.connect(process.env.MONGODB_URI);
    } catch (error) {
      res.status(500).json({ message: "Failed to Connect to The Database!" });
      return;
    }

    const db = client.db();
    try {
      await db.collection("messages").insertOne(newMessage);
    } catch (error) {
      client.close();
      res
        .status(500)
        .json({ message: "Failed to Save Message to The Database!" });
      return;
    }

    client.close();
    res.status(201).json({ message: "Message Sent Successfully!", newMessage });
  }
}
