import Link from "next/link";
import classes from "./page.module.css";

export default function Home() {
  return (
    <>
      <header className={classes.header}>
        <div className={classes.slideshow}></div>
        <div>
          <div className={classes.hero}>
            <h1>Welcome to NextLevel Food</h1>
            <p>Delicious meals, shared by a food-loving community.</p>
          </div>
          <div className={classes.cta}>
            <Link href={"community"}>Join The Community</Link>
            <Link href={"meals"}>Discover Meals</Link>
          </div>
        </div>
      </header>
      <main>
        <section className={classes.section}>
          <h2>How It Works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. Users can upload their recipes, browse
            through a variety of dishes, and even follow their favorite chefs to
            stay updated with new posts.
          </p>
          <p>
            Discover new dishes by exploring different categories or using our
            search feature to find specific recipes. Connect with other food
            enthusiasts by commenting on recipes, sharing tips, and even
            collaborating on new dishes.
          </p>
        </section>
        <section className={classes.section}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food stands out because it is more than just a recipe
            site. It is a community for food lovers to connect, share, and
            inspire each other. Our platform is designed to make sharing recipes
            easy and fun, while also providing a space for users to engage with
            one another.
          </p>
          <p>
            Whether you are a professional chef or a home cook, NextLevel Food
            offers a welcoming environment for everyone. Join us to discover new
            culinary techniques, get inspired by unique dishes, and become a
            part of a vibrant foodie community.
          </p>
        </section>
      </main>
    </>
  );
}
