import Card from "../ui/card";
import styles from "./meetupItem.module.css";

export default function MeetupItem({ image, title, address }) {
  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
        </div>
        <div className={styles.actions}>
          <button>Details</button>
        </div>
      </Card>
    </li>
  );
}
