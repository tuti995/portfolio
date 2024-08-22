import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

const getPostData = (slug: string): any => {
  const content = fs.readFileSync(`/content/${slug}.md`, "utf8");
  console.log(slug, "slug");
  console.log(content, "content");
  const matterResult = matter(content);
  revalidatePath("/posts");
  return matterResult;
};

export default getPostData;
