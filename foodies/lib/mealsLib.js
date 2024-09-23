import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const mealsDB = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve, reject) => setTimeout(resolve, 2000));
  // throw new Error("Fetching Meals Failed!");
  return mealsDB.prepare("SELECT * FROM meals").all();
}

export function getMealsById(id) {
  return mealsDB.prepare("SELECT * FROM meals WHERE mealId = ?").get(id);
}

export async function saveMeal(meal) {
  meal.mealId = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.mealId}.${extension}`;

  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer();

  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving File Failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  mealsDB
    .prepare(
      `
    INSERT INTO meals 
      (mealId, title, image, summary, instructions, creator, creator_email) 
    VALUES (
      @mealId,
      @title,
      @image,
      @summary,
      @instructions,
      @creator,
      @creator_email
    )
 `
    )
    .run(meal);
}
