import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

const Introduction = () => {
  return (
    <section className="pt-40 h-[84vh] lg:pt-40">
      <div className="container mx-auto">
        <div className="flex lg:flex-row-reverse flex-col justify-between items-center gap-x-8 max-w-[720px] mx-auto">
          <div className="border border-dotted rounded-full p-2">
            <div className="border rounded-full p-2">
              <Image
                src="/assets/images/profile.png"
                width={200}
                height={200}
                priority
                alt="プロフィール画像"
                className="rounded-full"
              />
            </div>
          </div>
          <div className="flex flex-col max-w-[600px] pt-4">
            <h1 className="h1 py-2">Hi, I’m {process.env.MY_NAME}.</h1>
            <p className="text-base">I like doing various things on the web.</p>
            <p className="text-base">
              I love cats and I believe they love me too.
            </p>
            <p className="text-base">
              The profile picture nekooroshi is very cute 🐈 ...
            </p>
          </div>
        </div>
        <div className="hidden md:flex absolute left-2/4 bottom-8 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
