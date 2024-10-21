import { connectDatabase, insertDataToDatabase } from "@/helpers/utils";

export default async function handler(req, res, next) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Validate the inputs (e.g., email format)
    if (!email || email.trim() === "" || !email.includes("@")) {
      res.status(400).json({ message: "Enter Valid Email Address!" });
      return;
    }

    // Store the newsletter subscription in a database
    // (e.g., using MongoDB, Redis, or a third-party service)
    let client;
    try {
      client = await connectDatabase();
    } catch (error) {
      res.status(500).json({ message: "Error Connecting to The Database" });
      return;
    }

    try {
      await insertDataToDatabase(client, "newsletter", { email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: "Error Saving Newsletter Subscription" });
      return;
    }

    res.status(201).json({ message: "Newsletter Subscription Successful" });
  }
}
