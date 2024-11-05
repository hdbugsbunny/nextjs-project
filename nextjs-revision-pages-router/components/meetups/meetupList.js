import MeetupItem from "./meetupItem";
import styles from "./meetupList.module.css";

export default function MeetupList({ meetups }) {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} {...meetup} />
      ))}
    </ul>
  );
}
