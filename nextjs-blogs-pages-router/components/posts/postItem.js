import Image from "next/image";
import Link from "next/link";
import classes from "./postItem.module.css";

export default function PostItem({ post }) {
  const { id, title, createdAt, image, description } = post;
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const formattedLink = `/posts/${id}`;
  const formattedImage = `/images/posts/${image}`;

  return (
    <li className={classes.post}>
      <Link href={formattedLink}>
        <div className={classes.image}>
          <Image
            src={formattedImage}
            alt={title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
}
