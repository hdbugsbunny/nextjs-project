import classes from "./commentList.module.css";

export default function CommentList({ comments }) {
  return (
    <ul className={classes.comments}>
      {/* Render List of Comments - Fetched From API */}
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <div>
            Posted by <address>{comment.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}
