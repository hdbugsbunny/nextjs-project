import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList() {
  return (
    <ul className={classes.posts}>
      <Post author="Harshit" body="React.js is Awesome!" />
      <Post author="Manuel" body="Check Out The Full Course!" />
    </ul>
  );
}
