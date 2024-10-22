import { NotificationContext } from "@/store/notificationContext";
import { useContext, useEffect, useState } from "react";
import CommentList from "./commentList";
import classes from "./comments.module.css";
import NewComment from "./newComment";

export default function Comments(props) {
  const { eventId } = props;
  const notificationCtx = useContext(NotificationContext);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isLoadingComments, setIsLoadingComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      (async () => {
        setIsLoadingComments(true);
        const response = await fetch(`/api/comments/${eventId}`);
        if (!response.ok) {
          const responseData = await response.json();
          notificationCtx.showNotification(
            "Error!!",
            responseData.message,
            "error"
          );
        } else {
          const responseData = await response.json();
          setComments(responseData.comments);
        }
        setIsLoadingComments(false);
      })();
    }
  }, [showComments]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const onSubmitComment = async (commentData) => {
    notificationCtx.showNotification(
      "Comment Submission!",
      "Submitting Your Comment...",
      "pending"
    );

    // Send the comment to the server for storage
    const response = await fetch(`/api/comments/${eventId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
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
      setComments([responseData.comment, ...comments]);
      notificationCtx.showNotification(
        "Success!",
        responseData.message,
        "success"
      );
    }
  };

  return (
    <section className={classes.comments}>
      <button onClick={toggleComments}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onSubmitComment={onSubmitComment} />}
      {showComments && !isLoadingComments && (
        <CommentList comments={comments} />
      )}
      {showComments && isLoadingComments && <p>Loading Comments...</p>}
    </section>
  );
}
