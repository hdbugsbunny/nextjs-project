import trainingDB from "./db";

export function getTrainings() {
  const stmt = trainingDB.prepare("SELECT * FROM trainings");
  return stmt.all();
}
