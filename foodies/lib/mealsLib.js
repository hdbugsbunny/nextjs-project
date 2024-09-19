import sql from "better-sqlite3";

const mealsDB = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  // throw new Error("Fetching Meals Failed!");
  return mealsDB.prepare("SELECT * FROM meals").all();
}

export function getMealsById(id) {
  return mealsDB.prepare("SELECT * FROM meals WHERE mealId = ?").get(id);
}
