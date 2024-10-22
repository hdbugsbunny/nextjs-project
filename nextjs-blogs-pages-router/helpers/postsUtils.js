import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDir = path.join(process.cwd(), "posts");

const getPostData = (fileName) => {
  const filePath = path.join(postsDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    id: fileName.replace(/\.md$/, ""),
    content,
    ...data,
  };
};

export function getAllPosts() {
  const postsFiles = fs.readdirSync(postsDir);
  const allPosts = postsFiles
    .map(getPostData)
    .sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));

  return allPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}
