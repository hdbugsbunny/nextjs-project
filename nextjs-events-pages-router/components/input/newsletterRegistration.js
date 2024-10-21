import classes from "./newsletterRegistration.module.css";

export default function NewsletterRegistration() {
  const registerHandler = (event) => {
    event.preventDefault();
    // Send the email to the server for subscription
    console.log("Email Subscribed");
  };

  return (
    <section className={classes.newsletter}>
      <h2>Sign Up to Stay Updated!</h2>
      <form onSubmit={registerHandler}>
        <div className={classes.control}>
          <input
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
