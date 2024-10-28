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

  let hashedPassword;
  try {
    hashedPassword = await hashPassword(password);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something Went Wrong! Please Try Again!" });
    return;
  }

  let client;
  try {
    client = await connectToDatabase();
  } catch (error) {
    res.status(500).json({ message: "Can't Connect To Database!" });
    return;
  }

  const db = client.db();
  try {
    await db.collection("users").insertOne({ email, password: hashedPassword });
    res.status(201).json({ message: "User Created Successfully!" });
  } catch (error) {
    res.status(500).json({ message: "User Creation Failed!" });
  }
}
