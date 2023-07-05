import Title from "./Title";
import { BsReverseListColumnsReverse } from "react-icons/bs";
import SkillBox from "./SkillBox";

const Skills = () => {
  const skillsList = [
    {
      name: "HTML5",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      name: "CSS3",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      name: "Javascript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "Reactjs",
      link: "https://react.dev/",
    },
    { name: "Nextjs", link: "https://nextjs.org/docs" },
    { name: "Typescript", link: "https://www.typescriptlang.org/docs/" },
    { name: "Tailwind CSS", link: "https://v2.tailwindcss.com/docs" },
    { name: "git", link: "https://git-scm.com/doc" },
    { name: "github", link: "https://github.com/Md-Ishmam-Iqbal" },
    { name: "Vercel", link: "https://vercel.com/" },
    { name: "Netlify", link: "https://www.netlify.com/" },
  ];

  return (
    <div className="wrapper">
      <Title text="Skills" icon={<BsReverseListColumnsReverse />} />
      <div>
        <div className="flex gap-6 flex-wrap">
          {skillsList.map((skill) => (
            <SkillBox key={skill.name} name={skill.name} link={skill.link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
