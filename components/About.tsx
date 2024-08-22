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
        <p className="leading-[2] lg:leading-[3]">
          出身は神奈川県横浜市で、現在も横浜市在住のハマっ子です。
          <br />
          経歴は 医療系専門学校 → 医療職 → 職業訓練校 → Web制作会社 →
          Webメディアサービス会社
          <br />
          Web制作会社では主にコーダー兼ディレクター として働いていました。
          <br />
          Webメディアサービス会社では主にWeb広告運用とサイトの改修などを担当しています。
          <br />
          好きなものは観葉植物と読書と猫。
          <br />
          マイブームは散歩とパン屋巡りです。
        </p>
      </div>
      <div className="max-w-[800px] mx-auto">
        <h3 className="text-xl my-16 font-bold">Usage experience</h3>
        <div className="grid place-items-center grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-4">
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
