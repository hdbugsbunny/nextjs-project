import { S3 } from "@aws-sdk/client-s3";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const s3 = new S3({
  region: "ap-south-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});
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

  const bufferedImage = await meal.image.arrayBuffer();

  s3.putObject({
    Bucket: "harshit-nextjs-demo-users-image",
    Key: fileName,
    Body: Buffer.from(bufferedImage),
    ContentType: meal.image.type,
  });

  meal.image = fileName;

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
