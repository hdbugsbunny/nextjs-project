import MealsGrid from "@/components/mealsGrid/mealsGrid";
import Link from "next/link";
import classes from "./page.module.css";

export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Discover Recipes, Created{" "}
          <span className={classes.highlight}>By You!</span>
        </h1>
        <p>
          NextLevel Food is a platform for foodies to share their favorite
          recipes with the world. Discover a wide range of delicious meals and
          try your hand at making them yourself.
        </p>
        <p className={classes.cta}>
          <Link href={"meals/share"}>Share Your Own Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]} />
      </main>
    </>
  );
}
