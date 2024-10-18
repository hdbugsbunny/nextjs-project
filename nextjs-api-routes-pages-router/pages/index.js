import { useRef } from "react";

export default function HomePage() {
  const emailRef = useRef();
  const feedbackRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const feedback = feedbackRef.current.value;
  };

  return (
    <div>
      <h1>Home Page!</h1>
      <form>
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
    </div>
  );
}
