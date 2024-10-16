import fs from "fs/promises";
import path from "path";

export default async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummyBackend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
}
