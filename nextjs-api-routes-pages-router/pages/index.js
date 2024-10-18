import { useRef, useState } from "react";

export default function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();
  const [allFeedbacks, setAllFeedbacks] = useState([]);
  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value || "test@example.com";
    const feedback = feedbackRef.current.value || "Some Feedback";

    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, feedback }),
    })
      .then((response) => response.json())
      .then((data) => console.log("Feedback sent successfully!", data))
      .catch((error) => console.error("Error sending feedback:", error));
  };

  const getAllFeedbacks = () => {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => setAllFeedbacks(data.feedbackData))
      .catch((error) => console.error("Error fetching feedback:", error));
  };

  return (
    <div>
      <h1>Home Page!</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email Address</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your feedback</label>
          <textarea id="feedback" rows={5} ref={feedbackRef} />
        </div>
        <button>Send Feedback!</button>
      </form>
      <hr />
      <button onClick={getAllFeedbacks}>Get All Feedbacks!</button>
      <ul>
        {allFeedbacks.map((feedbacks) => (
          <li key={feedbacks.id}>
            {feedbacks.email} - {feedbacks.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
}
