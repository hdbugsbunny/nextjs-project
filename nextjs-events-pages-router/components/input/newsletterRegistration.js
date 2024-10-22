import { NotificationContext } from "@/store/notificationContext";
import { useContext, useRef } from "react";
import classes from "./newsletterRegistration.module.css";

export default function NewsletterRegistration() {
  const emailRef = useRef();
  const notificationCtx = useContext(NotificationContext);

  const registerHandler = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;

    notificationCtx.showNotification(
      "Signing Up...",
      "Registering For Newsletter",
      "pending"
    );

    // Send the email to the server for subscription
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    if (!response.ok) {
      const responseData = await response.json();
      notificationCtx.showNotification(
        "Error!!",
        responseData.message,
        "error"
      );
    } else {
      const responseData = await response.json();
      notificationCtx.showNotification(
        "Success!!",
        responseData.message,
        "success"
      );
    }
    emailRef.current.value = "";
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
