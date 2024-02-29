import { FaProjectDiagram } from "react-icons/fa";
import eCommerce from "../public/img/projects/my-ecommerce-site.png";
import hifzCompanion from "../public/img/projects/hifz-companion.png";
import randomQuoteGenerator from "../public/img/projects/random-quote-generator.png";
import superteacherClient from "../public/img/projects/superteacher-client.png";
import superteacherApi from "../public/img/projects/superteacher-api.png";
import realtimeChat from "../public/img/projects/realtime-chat.png";
import portfolio from "../public/img/projects/portfolio.png";
import ProjectCard from "./PublishedProjectCard";
import Title from "./Title";

const PublishedProjects = () => {
  const ProjectsList = [
    {
      name: "hifz-companion",
      link: "https://md-ishmam-iqbal.github.io/hifz-companion/",
      image: hifzCompanion,
      description: "Assistant to enhance Qur'an memorization built with React",
    },
    {
      name: "e-commerce",
      link: "https://main--my-ecommerce-site-mdishmamiqbal.netlify.app/",
      image: eCommerce,
      description:
        "E-commerce site built with React (hooks, state, context etc.), React-Router, React Query",
    },
    {
      name: "superteacher-client",
      link: "https://github.com/iIqbalSazim/superteacher-client",
      image: superteacherClient,
      description:
        "A dedicated application designed for freelance teachers called Superteacher (yet to be published)",
    },
    {
      name: "superteacher-api",
      link: "https://github.com/iIqbalSazim/superteacher-api",
      image: superteacherApi,
      description:
        "Ruby on Rails backend portion for a dedicated application designed for freelance teachers called Superteacher (yet to be published)",
    },
    {
      name: "realtime-chat-client",
      link: "https://github.com/iIqbalSazim/realtime-chat-client",
      image: realtimeChat,
      description: "Client repository of a realtime chat application",
    },
    {
      name: "realtime-chat-api",
      link: "https://github.com/iIqbalSazim/realtime-chat-api",
      image: realtimeChat,
      description:
        "Ruby on Rails api repository of the realtime chat application",
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

export default PublishedProjects;
