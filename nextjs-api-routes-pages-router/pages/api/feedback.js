import fs from "fs";
import path from "path";

export default function handler(req, res, next) {
  if (req.method === "POST") {
    const { email, feedback } = req.body;

    const newFeedback = { id: new Date(), email, feedback };

    // store the feedback in the file
    fs.writeFileSync(
      path.join(process.cwd(), "data", "feedback.json"),
      JSON.stringify(
        [
          newFeedback,
          ...JSON.parse(
            fs.readFileSync(
              path.join(process.cwd(), "data", "feedback.json"),
              "utf-8"
            )
          ),
        ],
        null,
        2
      )
    );

    // send a success response back to the client
    res.status(201).json({
      message: "Feedback submitted successfully",
      feedback: newFeedback,
    });
  } else {
    res.status(200).json({ name: "Harshit" });
  }
}
