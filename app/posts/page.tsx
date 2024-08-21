import React from "react";
import Link from "next/link";
import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

export default function Posts() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post, index) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <div className="container max-w-[1100px] mx-auto mb-12">
      <h2 className="my-12 text-3xl text-center">Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {postPreviews}
      </div>
    </div>
  );
}
