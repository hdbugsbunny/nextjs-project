import ProfileImage from "@/public/images/site/ProfileImage.jpg";
import Image from "next/image";
import classes from "./hero.module.css";

export default function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src={ProfileImage}
          alt="Profile Image"
          width={300}
          height={300}
          priority
        />
      </div>
      <h1>Hi, I am Harshit Durgapal</h1>
      <p>
        I'm a software engineer, passionate about technology and design. I blog
        about web development - especially JS frameworks like ReactJs, NextJs or
        NodeJs.
      </p>
    </section>
  );
}
