import sql from "better-sqlite3";

const trainingDB = new sql("training.db");

trainingDB.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );
`);

trainingDB.exec(`
    CREATE TABLE IF NOT EXISTS sessions (
        id TEXT NOT NULL PRIMARY KEY,
        expires_at INTEGER NOT NULL,
        user_id TEXT NOT NULL,
        FOREIGN KEY(user_id) REFERENCES users(id)
    );
`);

trainingDB.exec(`
    CREATE TABLE IF NOT EXISTS trainings (
        id INTEGER PRIMARY KEY,
        title TEXT,
        image TEXT,
        description TEXT
    );
`);

const hasTrainings =
  trainingDB.prepare("SELECT COUNT(*) as COUNT FROM trainings").get().count > 0;

if (!hasTrainings) {
  trainingDB.exec(`
        INSERT INTO trainings (title, image, description) VALUES
        ('Yoga', '/yoga.jpg', 'A gentle way to improve flexibility and balance.'),
        ('Boxing', '/boxing.jpg', 'A high-energy workout that improves strength and speed.'),
        ('Running', '/running.jpg', 'A great way to improve cardiovascular health and endurance.'),
        ('WeightLifting', '/weightlifting.jpg', 'A strength-building workout that helps tone muscles.'),
        ('Cycling', '/cycling.jpg', 'A low-impact workout that improves cardiovascular health and endurance.'),
        ('Gaming', '/gaming.jpg', 'A fun way to improve hand-eye coordination and reflexes.'),
        ('Sailing', '/sailing.jpg', 'A relaxing way to enjoy the outdoors and improve balance.');
    `);
}

export default trainingDB;
