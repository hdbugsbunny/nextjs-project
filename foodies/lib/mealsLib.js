import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const mealsDB = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  // throw new Error("Fetching Meals Failed!");
  return mealsDB.prepare("SELECT * FROM meals").all();
}

export function getMealsById(id) {
  return mealsDB.prepare("SELECT * FROM meals WHERE mealId = ?").get(id);
}

export function saveMeal(meal) {
  meal.mealId = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
}
