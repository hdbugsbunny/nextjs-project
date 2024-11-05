import { useRef } from "react";
import Card from "../ui/card";
import styles from "./newMeetupForm.module.css";

export default function NewMeetupForm({ onAddMeetup }) {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const title = titleRef.current.value;
    const image = imageRef.current.value;
    const address = addressRef.current.value;
    const description = descriptionRef.current.value;

    onAddMeetup({ title, image, address, description });

    titleRef.current.value = "";
    imageRef.current.value = "";
    addressRef.current.value = "";
    descriptionRef.current.value = "";
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" ref={titleRef} required />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Meetup Image URL</label>
          <input type="url" id="image" ref={imageRef} required />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" ref={addressRef} required />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" ref={descriptionRef} rows={5} required />
        </div>
        <div className={styles.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
