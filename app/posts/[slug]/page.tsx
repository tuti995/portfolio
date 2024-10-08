import Link from "next/link";
import Markdown from "markdown-to-jsx";
import getPostMetadata from "@/components/getPostMetadata";
import getPostData from "@/components/getPostData";

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  const paths = posts.map((post) => ({
    slug: post.slug,
  }));
  return paths;
};

export default async function PostPage(props: any) {
  const slug = props.params.slug;
  const post = await getPostData(slug);
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
