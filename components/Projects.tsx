import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import eCommerce from "../public/img/projects/my-ecommerce-site.png";
import hifzCompanion from "../public/img/projects/hifz-companion.png";
import randomQuoteGenerator from "../public/img/projects/random-quote-generator.png";
import portfolio from "../public/img/projects/portfolio.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const ProjectsList = [
    {
      name: "e-commerce",
      link: "https://main--my-ecommerce-site-mdishmamiqbal.netlify.app/",
      image: eCommerce,
      description:
        "E-commerce site built with React (hooks, state, context etc.), React-Router, React Query",
    },
    {
      name: "hifz-companion",
      link: "https://md-ishmam-iqbal.github.io/hifz-companion/",
      image: hifzCompanion,
      description: "Assistant to enhance Qur'an memorization built with React",
    },
    {
      name: "random-quote-generator",
      link: "https://md-ishmam-iqbal.github.io/Random-Quote-Generator_PF/",
      image: randomQuoteGenerator,
      description: "Random quote generator built with React",
    },
    {
      name: "portfolio",
      link: "https://my-portfolio-nextjs-omega.vercel.app/",
      image: portfolio,
      description: "Portfolio site built with Nextjs",
    },
  ];

  return (
    <div className="wrapper">
      <Title text="My Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 place-items-center p-10">
        {ProjectsList.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            link={project.link}
            image={project.image}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
