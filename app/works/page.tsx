"use client";
import React, { useState } from "react";
import { Tabs } from "@radix-ui/react-tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/assets/images/works/portfolio.jpg",
    category: "next.js",
    name: "ポートフォリオサイト",
    description:
      " Next.js 14, Tailwind CSS, Shadcn UI でポートフォリオサイトを作成しました",
    link: "",
  },
  {
    image: "/assets/images/works/rss.jpg",
    category: "next.js",
    name: "自主制作　RSSサイト",
    description:
      "Next.js 13, GitHub Pages で技術記事を集約するサイトを作成しました",
    link: "",
  },
  {
    image: "/assets/images/works/www.nousite.co.jp.jpg",
    category: "nuxt.js",
    name: "コーポレートサイト（自社サイト）",
    description: "コーディングと部分的にデザインを担当しました",
    link: "https://www.nousite.co.jp/",
  },
  {
    image: "/assets/images/works/unv.jpg",
    category: "nuxt.js",
    name: "大学オープンキャンパスサイト",
    description: "コーディングを担当しました",
    link: "",
  },
  {
    image: "/assets/images/works/corporate.jpg",
    category: "nuxt.js",
    name: "コーポレートサイト",
    description: "コーディングと部分的にデザインを担当しました",
    link: "https://tandem-cm.co.jp/",
  },
];

export default function Works() {
  return (
    <div className="container">
      <div>
        <h2 className="my-12 text-3xl text-center">Works</h2>
      </div>
      <div className="mt-8 mb-24 mx-auto md:max-w-[720px] lg:max-w-[1100px] grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, index) => {
          return <ProjectCard project={project} key={index} />;
        })}
      </div>
    </div>
  );
}
