import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  const folder = path.join(process.cwd(), "content");
  if (!fs.existsSync(folder)) {
    throw new Error(`Directory not found: ${folder}`);
  }
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const filePath = path.join(folder, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      category: matterResult.data.category,
      slug: fileName.replace(".md", ""),
    };
  });

  const sortedPosts = posts.sort((postA, postB) =>
    new Date(postA.date) > new Date(postB.date) ? -1 : 1
  );

  return sortedPosts;
};

export default getPostMetadata;
