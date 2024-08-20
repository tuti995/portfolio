import Image from "next/image";
import Link from "next/link";

const skillData = {
  title: "skills",
  data: [
    {
      imgPath: "/assets/images/about/icons-html.svg",
    },
    {
      imgPath: "/assets/images/about/icons-css.svg",
    },
    {
      imgPath: "/assets/images/about/icons-scss.svg",
    },
    {
      imgPath: "/assets/images/about/icons-tailwind.svg",
    },
    {
      imgPath: "/assets/images/about/icons-javascript.svg",
    },
    {
      imgPath: "/assets/images/about/icons-typescript.svg",
    },
    {
      imgPath: "/assets/images/about/icons-react.svg",
    },
    {
      imgPath: "/assets/images/about/icons-vue.svg",
    },
    {
      imgPath: "/assets/images/about/icons-nuxtjs.svg",
    },
    {
      imgPath: "/assets/images/about/icons-nodejs.svg",
    },
    {
      imgPath: "/assets/images/about/icons-git.svg",
    },
    {
      imgPath: "/assets/images/about/icons-github.svg",
    },
    {
      imgPath: "/assets/images/about/icons-githubactions.svg",
    },
    {
      imgPath: "/assets/images/about/icons-vscode.svg",
    },
    {
      imgPath: "/assets/images/about/icons-eslint.svg",
    },
    {
      imgPath: "/assets/images/about/icons-illustrator.svg",
    },
    {
      imgPath: "/assets/images/about/icons-photoshop.svg",
    },
    {
      imgPath: "/assets/images/about/icons-xd.svg",
    },
    {
      imgPath: "/assets/images/about/icons-figma.svg",
    },
  ],
};

export default function About() {
  return (
    <section className="container xl:pt-24 my-16 lg:my-32">
      <div className="mx-auto max-w-[800px]">
        <h2 className="text-3xl text-center my-8 xl:mb-16">About Me</h2>
        <p className="leading-loose">
          出身は{process.env.MY_BIRTHPLACE_1}で、現在も
          {process.env.MY_BIRTHPLACE_2}在住のハマっ子です。
          <br />
          経歴は {process.env.MY_CAREER_1} → {process.env.MY_CAREER_2} →{" "}
          {process.env.MY_CAREER_3} → {process.env.MY_CAREER_4} →{" "}
          {process.env.MY_CAREER_5}
          <br />
          {process.env.MY_CAREER_4}では主に{process.env.MY_JOB_1}
          として働いていました。
          <br />
          好きなものは観葉植物と読書と猫。
          <br />
          マイブームは散歩とパン屋巡りです。
        </p>
      </div>
      <div className="max-w-[800px] mx-auto">
        <h3 className="text-xl my-12 font-bold">Usage experience</h3>
        <div className="grid place-items-center grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-3">
          {skillData.data.map((item, index) => {
            const { imgPath } = item;
            return (
              <div key={index}>
                <Image
                  src={imgPath}
                  width={48}
                  height={48}
                  priority
                  alt="logo"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
