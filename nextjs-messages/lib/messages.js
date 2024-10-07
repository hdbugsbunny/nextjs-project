import sql from "better-sqlite3";

const messagesDB = new sql("messages.db");

function initDB() {
  messagesDB.exec(
    `CREATE TABLE IF NOT EXISTS messages (
      id INTEGER PRIMARY KEY,
      text TEXT
    );`
  );
}

initDB();

export function createMessage(text) {
  messagesDB.prepare("INSERT INTO messages (text) VALUES (?)").run(text);
}

export function getAllMessages() {
  console.log("Fetching all messages from DB...");
  return messagesDB.prepare("SELECT * FROM messages").all();
}
