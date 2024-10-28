import { hashPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";

export default async function handler(req, res, next) {
  if (req.method !== "POST") {
    res.status(404).json({ message: "Method Not Allowed!" });
    return;
  }

  const { email, password } = req.body;
  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message:
        "Invalid Email or Password Should Contain At-Least 7 Characters Long!",
    });
    return;
  }

  const client = await connectToDatabase();
  if (!client) {
    res.status(500).json({ message: "Can't Connect To Database!" });
    return;
  }

  const db = client.db();
  const existingUser = await db.collection("users").findOne({ email });
  if (existingUser) {
    res.status(422).json({ message: "Email Address Is Already Taken!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(password);
  if (!hashedPassword) {
    res.status(500).json({ message: "Can't Hash Password!" });
    client.close();
    return;
  }

  const result = await db
    .collection("users")
    .insertOne({ email, password: hashedPassword });
  if (!result.acknowledged) {
    res.status(500).json({ message: "User Creation Failed!" });
    client.close();
    return;
  }

  res.status(201).json({ message: "User Created Successfully!" });
  client.close();
}
