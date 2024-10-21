export default function handler(req, res, next) {
  if (req.method === "POST") {
    const { email } = req.body;

    // Validate the inputs (e.g., email format)
    if (!email || email.trim() === "" || !email.includes("@")) {
      res.status(400).json({ message: "Enter Valid Email Address!" });
      return;
    }

    // Store the newsletter subscription in a database
    // (e.g., using MongoDB, Redis, or a third-party service)

    console.log("🚀 ~ handler ~ email:", email);
    res.status(201).json({ message: "Newsletter Subscription Successful" });
  }
}
