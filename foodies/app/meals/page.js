import MealsGrid from "@/components/mealsGrid/mealsGrid";
import { getMeals } from "@/lib/mealsLib";
import Link from "next/link";
import { Suspense } from "react";
import MealsLoadingPage from "./loading-out";
import classes from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "Browse The Delicious Meals, shared by a food-loving community.",
};

async function Meals() {
  const meals = await getMeals();

  return <MealsGrid meals={meals} />;
}

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
        <Suspense fallback={<MealsLoadingPage />}>
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
