"use client";

import Link from "next/link";
import Image from "next/image";

import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

type Project = {
  image: string;
  category: string;
  name: string;
  description: string;
  link: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="w-full h-full max-w-[360px]">
      {project.link === "" ? (
        <>
          <CardHeader className="p-0">
            <div className="relative w-full h-[280px] flex items-center justify-center">
              <Image
                className="absolute shadow-2xl"
                src={project.image}
                width={247}
                height={250}
                priority
                alt=""
              />
            </div>
          </CardHeader>
          <div className="relative px-8 py-6">
            <Badge className="text-sm font-medium mb-2 absolute top-1 left-5">
              {project.category}
            </Badge>
            <h4 className="mt-5">{project.name}</h4>
            <p className="text-muted-foreground text-sm">
              {project.description}
            </p>
          </div>
        </>
      ) : (
        <Link href={project.link} target="_blank" rel="noopener noreferrer">
          <CardHeader className="p-0">
            <div className="relative w-full h-[280px] flex items-center justify-center">
              <Image
                className="absolute shadow-2xl"
                src={project.image}
                width={247}
                height={250}
                priority
                alt=""
              />
            </div>
          </CardHeader>
          <div className="relative px-8 py-6">
            <Badge className="text-sm font-medium mb-2 absolute top-1 left-5">
              {project.category}
            </Badge>
            <h4 className="mt-5">{project.name}</h4>
            <p className="text-muted-foreground text-sm">
              {project.description}
            </p>
          </div>
        </Link>
      )}
    </Card>
  );
}
