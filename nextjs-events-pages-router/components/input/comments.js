import { useEffect, useState } from "react";
import CommentList from "./commentList";
import classes from "./comments.module.css";
import NewComment from "./newComment";

export default function Comments(props) {
  const { eventId } = props;
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (showComments) {
      fetch(`/api/comments/${eventId}`)
        .then((response) => response.json())
        .then((responseData) => setComments(responseData.comments))
        .catch((error) => console.log(error));
    }
  }, [showComments]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const onSubmitComment = (commentData) => {
    // Send the comment to the server for storage
    fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
    })
      .then((response) => response.json())
      .then((responseData) => console.log(responseData))
      .catch((error) => console.error(error));
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleComments}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onSubmitComment={onSubmitComment} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}
