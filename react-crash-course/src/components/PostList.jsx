import { useEffect, useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList(props) {
  const { isPost, onStopPost } = props;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
    }

    fetchPosts();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setPosts((prevPosts) => [postData, ...prevPosts]);
    onStopPost();
  }

  return (
    <>
      {isPost && (
        <Modal onClose={onStopPost}>
          <NewPost onAddPost={addPostHandler} onCancel={onStopPost} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There Are No Posts Yet!</h2>
          <p>Start Adding Some!</p>
        </div>
      )}
    </>
  );
}
