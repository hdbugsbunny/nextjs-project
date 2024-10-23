import { useState } from "react";
import Notification from "../ui/notification";
import classes from "./contactForm.module.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [response, setResponse] = useState({
    title: "",
    message: "",
    status: "",
  });

  // Handle form input change event
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    setResponse({
      title: "Sending...",
      message: "Sending Message",
      status: "pending",
    });
    const { name, email, message } = formData;

    // Send the form data to the server using an API endpoint
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });
    const data = await response.json();
    if (!response.ok) {
      setResponse({ title: "Error!", message: data.message, status: "error" });
      setTimeout(
        () => setResponse({ title: "", message: "", status: "" }),
        3000
      );
      return;
    }
    setResponse({ title: "Success", message: data.message, status: "success" });
    setTimeout(() => setResponse({ title: "", message: "", status: "" }), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const { title, message, status } = response;

  return (
    <>
      <section className={classes.contact}>
        <h1>Contact Us!</h1>
        <form className={classes.form} onSubmit={sendMessage}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              required
            />
          </div>
          <div className={classes.actions}>
            <button disabled={status}>
              {status ? "Sending Message..." : "Send Message!"}
            </button>
          </div>
        </form>
      </section>
      {title && message && status && (
        <Notification title={title} message={message} status={status} />
      )}
    </>
  );
}
