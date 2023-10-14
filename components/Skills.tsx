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
      name: "Ruby",
      link: "https://www.ruby-lang.org/en/",
    },
    {
      name: "Reactjs",
      link: "https://react.dev/",
    },
    { name: "Nextjs", link: "https://nextjs.org/docs" },
    { name: "Typescript", link: "https://www.typescriptlang.org/docs/" },
    { name: "Redux Toolkit", link: "https://redux-toolkit.js.org/" },
    { name: "React Query", link: "https://tanstack.com/query/v3/" },
    { name: "React Router", link: "https://reactrouter.com/en/main" },
    { name: "React Hook Form", link: "https://react-hook-form.com/" },
    { name: "Mantine UI and Mantine Form", link: "https://mantine.dev/" },
    { name: "Tailwind CSS", link: "https://v2.tailwindcss.com/docs" },
    { name: "Styled Components", link: "https://styled-components.com/" },
    { name: "Chakra UI", link: "https://chakra-ui.com/" },
    { name: "Material UI", link: "https://mui.com/" },
    { name: "Git", link: "https://git-scm.com/" },
    { name: "Github", link: "https://github.com/" },
    { name: "Nodejs", link: "https://nodejs.org/en" },
    {
      name: "Expressjs",
      link: "https://expressjs.com/",
    },
    {
      name: "Ruby On Rails",
      link: "https://rubyonrails.org/",
    },
    {
      name: "Docker",
      link: "https://www.docker.com/",
    },
    {
      name: "Postgres",
      link: "https://www.postgresql.org/",
    },
    {
      name: "Mongodb",
      link: "https://www.mongodb.com/",
    }
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
