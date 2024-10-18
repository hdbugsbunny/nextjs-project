import fs from "fs";
import path from "path";

export default function FeedbackPage(props) {
  return (
    <div>
      <h1>Feedback Page</h1>
      <ul>
        {props.feedbackData.map((feedbacks) => (
          <li key={feedbacks.id}>
            {feedbacks.email} - {feedbacks.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const feedbackData = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data", "feedback.json"), "utf-8")
  );

  return { props: { feedbackData } };
}
