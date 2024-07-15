import classes from "./NewPost.module.css";

export default function NewPost(props) {
  const { onBodyChange, onAuthorChange } = props;
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" required onChange={onAuthorChange} />
      </p>
    </form>
  );
}
