import sql from "better-sqlite3";

const mealsDB = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  return mealsDB.prepare("SELECT * FROM meals").all();
}