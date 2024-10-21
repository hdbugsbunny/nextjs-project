import { useRef, useState } from "react";
import classes from "./newComment.module.css";

export default function NewComment(props) {
  const { onSubmitComment } = props;
  const [isInvalid, setIsInvalid] = useState(false);
  const emailRef = useRef();
  const nameRef = useRef();
  const commentRef = useRef();

  const submitCommentHandler = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const comment = commentRef.current.value;

    if (
      !email ||
      email.trim() === "" ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !comment ||
      comment.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);
    onSubmitComment({ email, name, comment });
  };

  return (
    <form className={classes.form} onSubmit={submitCommentHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email:</label>
          <input type="email" name="email" id="email" ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Your Name:</label>
          <input type="text" name="name" id="name" ref={nameRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="comment">Your Comment:</label>
        <textarea name="comment" id="comment" rows={5} ref={commentRef} />
      </div>
      {isInvalid && <p>Please Enter Valid Email Address And Comment!</p>}
      <button>Submit!</button>
    </form>
  );
}
