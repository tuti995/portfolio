import Link from "next/link";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getPostMetadata from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
  const folder = "content/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const generareStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export default function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostContent(slug);
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
