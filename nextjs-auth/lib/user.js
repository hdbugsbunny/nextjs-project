import trainingDB from "./db";

export function createUser(email, password) {
  const result = trainingDB
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);

  return result.lastInsertRowid;
}
