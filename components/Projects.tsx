import { FaProjectDiagram } from "react-icons/fa";
import Title from "./Title";
import amazonClone from "../public/img/projects/amazonClone(not-mine).webp";
import eCommerce from "../public/img/projects/my-ecommerce-site.png";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const ProjectsList = [
    { name: "Amazon Clone", link: "#", image: amazonClone },
    {
      name: "e-commerce",
      link: "https://main--my-ecommerce-site-mdishmamiqbal.netlify.app/",
      image: eCommerce,
    },
    { name: "Amazon Clone", link: "#", image: amazonClone },
  ];

  return (
    <div className="wrapper">
      <Title text="My Projects" icon={<FaProjectDiagram />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10 place-items-center">
        {ProjectsList.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            link={project.link}
            image={project.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
