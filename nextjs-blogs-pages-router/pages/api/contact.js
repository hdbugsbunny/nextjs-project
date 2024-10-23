export default function handler(req, res, next) {
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

    // Send email to the server using a library like nodemailer
    // ...
    const newMessage = { name, email, message };
    console.log("🚀 ~ handler ~ newMessage:", newMessage);

    res.status(201).json({ message: "Message sent successfully!" });
  }
}
