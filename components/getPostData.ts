import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { notFound } from "next/navigation";
import { revalidatePath } from "next/cache";

const getPostData = (slug: string): any => {
  const folder = "content/";
  const file = path.join(folder, `${slug}.md`);
  if (!fs.existsSync(file)) {
    notFound();
  }

  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  revalidatePath("/posts");
  return matterResult;
};

export default getPostData;
