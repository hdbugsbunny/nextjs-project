import { Link, useLoaderData } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

export default function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could Not Find Post!</h1>
          <p>Unfortunately, The Requested Post Could Not be Found!</p>
          <p>
            <Link to={".."} className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }

  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export async function loader(data) {
  const { params } = data;
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  const resData = await response.json();
  return resData.post || null;
}
