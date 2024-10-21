import classes from "./commentList.module.css";

export default function CommentList() {
  return (
    <ul className={classes.comments}>
      {/* Render List of Comments - Fetched From API */}
      <li>
        <p>Nice event! Looking forward to attending.</p>
        <div>
          Posted by <address>Harshit Durgapal</address>
        </div>
      </li>
      <li>
        <p>This is an excellent event! I'm excited.</p>
        <div>
          Posted by <address>Jane Smith</address>
        </div>
      </li>
    </ul>
  );
}
