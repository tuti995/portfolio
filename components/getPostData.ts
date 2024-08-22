import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { revalidatePath } from "next/cache";

const getPostData = (slug: string): any => {
  const folder = path.join(process.cwd(), "content");
  const file = path.join(folder, `${slug}.md`);
  if (!fs.existsSync(file)) {
    throw new Error(`File not found: ${file}`);
  }
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  revalidatePath("/posts");
  return matterResult;
};

export default getPostData;
