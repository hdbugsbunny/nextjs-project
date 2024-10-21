import { useRef } from "react";
import classes from "./newsletterRegistration.module.css";

export default function NewsletterRegistration() {
  const emailRef = useRef();

  const registerHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;

    // Send the email to the server for subscription
    fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((responseData) => console.log(responseData))
      .catch((error) => console.error(error));
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign Up to Stay Updated!</h2>
      <form onSubmit={registerHandler}>
        <div className={classes.control}>
          <input
            ref={emailRef}
            type="email"
            id="email"
            placeholder="Your Email!"
            aria-label="Your Email!"
            required
          />
          <button>Subscribe!</button>
        </div>
      </form>
    </section>
  );
}
