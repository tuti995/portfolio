import Link from "next/link";
import fs from "fs";
import path from "path";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";
import { revalidatePath } from "next/cache";
import { notFound } from "next/navigation";

const getPostContent = async (slug: string) => {
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

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  const paths = posts.map((post) => ({
    slug: post.slug,
  }));
  return paths;
};

export default async function PostPage(props: any) {
  const slug = props.params.slug;
  const post = await getPostContent(slug);
  return (
    <div className="container max-w-[800px] mx-auto">
      <h2 className="text-xl text-center p-8">{post.data.title}</h2>
      <article className="prose dark:prose-dark max-w-full">
        <Markdown>{post.content}</Markdown>
        <Link href="/posts/" className="dark:text-white">
          <p className="pt-12 text-center">戻る</p>
        </Link>
      </article>
    </div>
  );
}
