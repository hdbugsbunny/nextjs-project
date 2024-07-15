import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList(props) {
  const { isPost, onStopPost } = props;

  return (
    <>
      {isPost && (
        <Modal onClose={onStopPost}>
          <NewPost onCancel={onStopPost} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author="Harshit" body="React.js is Awesome!" />
        <Post author="Manuel" body="Check Out The Full Course!" />
      </ul>
    </>
  );
}
