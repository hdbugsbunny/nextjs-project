import { useEffect, useState } from "react";
import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";

export default function PostList(props) {
  const { isPost, onStopPost } = props;
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
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
      {!isFetching && (
        <ul className={classes.posts}>
          {posts.length > 0 &&
            posts.map((post) => (
              <Post key={post.id} author={post.author} body={post.body} />
            ))}
        </ul>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There Are No Posts Yet!</h2>
          <p>Start Adding Some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Loading Posts...</h2>
          <p>Please wait a moment.</p>
        </div>
      )}
    </>
  );
}
