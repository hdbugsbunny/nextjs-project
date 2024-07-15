import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Harshit" body="React.js is Awesome!" />
        <Post author="Manuel" body="Check Out The Full Course!" />
      </ul>
    </>
  );
}
