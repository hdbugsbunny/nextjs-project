import { useState } from "react";
import CommentList from "./commentList";
import classes from "./comments.module.css";
import NewComment from "./newComment";

export default function Comments(props) {
  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const onSubmitComment = (commentData) => {
    // Send the comment to the server for storage
    console.log("New Comment Submitted:", commentData);
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleComments}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onSubmitComment={onSubmitComment} />}
      {showComments && <CommentList />}
    </section>
  );
}
