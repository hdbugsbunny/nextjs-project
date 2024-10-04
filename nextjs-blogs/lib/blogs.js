import sql from "better-sqlite3";

const blogsDB = new sql("blogs.db");

function initDb() {
  blogsDB.exec(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY, 
      first_name TEXT, 
      last_name TEXT,
      email TEXT
    )`);
  blogsDB.exec(`
    CREATE TABLE IF NOT EXISTS blogs (
      id INTEGER PRIMARY KEY, 
      image_url TEXT NOT NULL,
      title TEXT NOT NULL, 
      content TEXT NOT NULL, 
      created_at TEXT DEFAULT CURRENT_TIMESTAMP,
      user_id INTEGER, 
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE
    )`);
  blogsDB.exec(`
    CREATE TABLE IF NOT EXISTS likes (
      user_id INTEGER, 
      blog_id INTEGER, 
      PRIMARY KEY(user_id, blog_id),
      FOREIGN KEY(user_id) REFERENCES users(id) ON DELETE CASCADE, 
      FOREIGN KEY(blog_id) REFERENCES blogs(id) ON DELETE CASCADE
    )`);

  //* Creating Two Dummy Users if They Don't Exist Already
  const stmt = blogsDB.prepare("SELECT COUNT(*) AS count FROM users");
  if (stmt.get().count === 0) {
    blogsDB.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('John', 'Doe', 'john@example.com')
  `);
    blogsDB.exec(`
    INSERT INTO users (first_name, last_name, email)
    VALUES ('Bugs', 'Bunny', 'bugs@example.com')
  `);
  }
}

initDb();

export async function getBlogs(maxNumber) {
  let limitClause = "";
  if (maxNumber) {
    limitClause = "LIMIT ?";
  }

  const stmt = blogsDB.prepare(`
    SELECT blogs.id, image_url AS image, title, content, created_at AS createdAt, first_name AS userFirstName, last_name AS userLastName, COUNT(likes.blog_id) AS likes, EXISTS(SELECT * FROM likes WHERE likes.blog_id = blogs.id and likes.user_id = 2) AS isLiked
    FROM blogs
    INNER JOIN users ON blogs.user_id = users.id
    LEFT JOIN likes ON blogs.id = likes.blog_id
    GROUP BY blogs.id
    ORDER BY createdAt DESC
    ${limitClause}`);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return maxNumber ? stmt.all(maxNumber) : stmt.all();
}

export async function storeBlog(blog) {
  const stmt = blogsDB.prepare(`
    INSERT INTO blogs (image_url, title, content, user_id)
    VALUES (?, ?, ?, ?)`);

  await new Promise((resolve) => setTimeout(resolve, 1000));
  return stmt.run(blog.imageUrl, blog.title, blog.content, blog.userId);
}

export async function updateBlogLikeStatus(blogId, userId) {
  const stmt = blogsDB.prepare(`
    SELECT COUNT(*) AS count
    FROM likes
    WHERE user_id = ? AND blog_id = ?`);

  const isLiked = stmt.get(userId, blogId).count === 0;
  if (isLiked) {
    const stmt = blogsDB.prepare(`
      INSERT INTO likes (user_id, blog_id)
      VALUES (?, ?)`);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return stmt.run(userId, blogId);
  } else {
    const stmt = blogsDB.prepare(`
      DELETE FROM likes
      WHERE user_id = ? AND blog_id = ?`);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return stmt.run(userId, blogId);
  }
}
