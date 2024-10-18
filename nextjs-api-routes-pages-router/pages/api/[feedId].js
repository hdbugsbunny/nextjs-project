import fs from "fs";
import path from "path";

export default function handler(req, res, next) {
  // get the id from the request
  const { feedId } = req.query;

  // get all the feedback from the file
  const feedbackData = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data", "feedback.json"), "utf-8")
  );

  // find the feedback with the given id
  const feedback = feedbackData.find((feedback) => feedback.id === feedId);

  // if the feedback is found, send it back to the client
  if (feedback) {
    res
      .status(200)
      .json({ message: "Feedback fetched successfully!", feedback });
  } else {
    // if the feedback is not found, send a 404 response
    res.status(404).json({ message: "Feedback not found" });
  }
}
