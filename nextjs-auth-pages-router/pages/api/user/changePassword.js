import { comparePassword, hashPassword } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import { getSession } from "next-auth/client";

export default async function handler(req, res, next) {
  if (req.method !== "PATCH") {
    res.status(404).json({ message: "Method Not Allowed!" });
    return;
  }

  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ message: "Not Authorized!" });
    return;
  }

  const { email } = session.user;
  const { newPassword, oldPassword } = req.body;
  if (
    !oldPassword ||
    oldPassword.trim().length < 7 ||
    !newPassword ||
    newPassword.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid Passwords Should Contain At-Least 7 Characters Long!",
    });
    return;
  }

  const client = await connectToDatabase();
  if (!client) {
    res.status(500).json({ message: "Can't Connect To Database!" });
    return;
  }

  const db = client.db();
  const user = await db.collection("users").findOne({ email });
  if (!user) {
    res.status(404).json({ message: "User Not Found!" });
    client.close();
    return;
  }

  const isValidPassword = await comparePassword(oldPassword, user.password);
  if (!isValidPassword) {
    res.status(403).json({ message: "Wrong Old Password! Try Again!" });
    client.close();
    return;
  }

  const hashedPassword = await hashPassword(newPassword);
  if (!hashedPassword) {
    res.status(500).json({ message: "Can't Hash Password!" });
    client.close();
    return;
  }

  const result = await db
    .collection("users")
    .updateOne({ email }, { $set: { password: hashedPassword } });

  if (!result.acknowledged) {
    res.status(500).json({ message: "Password Update Failed!" });
    client.close();
    return;
  }

  res.status(200).json({ message: "Password Updated Successfully!" });
  client.close();
}
