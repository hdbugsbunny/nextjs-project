export default function handler(req, res, next) {
  const { eventId } = req.query;

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
    const newComment = { id: new Date().toISOString(), email, name, comment };
    console.log("🚀 ~ handler ~ newComment:", newComment);
    res.status(201).json({ message: "Comment Added!", comment: newComment });
    return;
  }
  // Fetch the event comments from the database
  // (e.g., using MongoDB, Redis, or a third-party service)
  // and return them as JSON response
  const comments = [
    {
      id: "1",
      email: "harshit@example.com",
      name: "Harshit Durgapal",
      comment: "This is an excellent event!",
    },
    {
      id: "2",
      email: "jane@example.com",
      name: "Jane Smith",
      comment: "I'm excited to attend!",
    },
  ];
  res.status(200).json({ message: "Comments Fetched!", comments });
}
