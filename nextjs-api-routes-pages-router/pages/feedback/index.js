import fs from "fs";
import path from "path";
import { useState } from "react";

export default function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();
  const feedbackDetail = (id) => {
    // fetch feedback details from the api
    fetch(`/api/feedback/${id}`)
      .then((response) => response.json())
      .then((data) => setFeedbackData(data.feedback))
      .catch((error) =>
        console.error("Error fetching feedback details:", error)
      );
  };

  return (
    <div>
      <h1>Feedback Page</h1>
      <ul>
        {props.feedbackData.map((feedbacks) => (
          <li key={feedbacks.id}>
            {feedbacks.feedback} -{" "}
            <button onClick={feedbackDetail.bind(null, feedbacks.id)}>
              Show Feedback Details!
            </button>
          </li>
        ))}
      </ul>
      {feedbackData && (
        <>
          <hr />
          <div>
            <h2>Feedback Details:</h2>
            <p>{feedbackData.email}</p>
            <p>{feedbackData.feedback}</p>
          </div>
        </>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const feedbackData = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data", "feedback.json"), "utf-8")
  );

  return { props: { feedbackData } };
}
