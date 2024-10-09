import trainingDB from "./db";

export function createUser(email, password) {
  const result = trainingDB
    .prepare("INSERT INTO users (email, password) VALUES (?, ?)")
    .run(email, password);

  return result.lastInsertRowid;
}

export function getUserByEmail(email) {
  const stmt = trainingDB.prepare("SELECT * FROM users WHERE email =?");
  return stmt.get(email);
}
