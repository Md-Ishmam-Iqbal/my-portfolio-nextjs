import Title from "./Title";
import {
  MdWorkOutline,
  MdOutlineDeveloperMode,
  MdJavascript,
} from "react-icons/md";
import { TbServer } from "react-icons/tb";
import { GiArchiveResearch } from "react-icons/gi";

import ReserveSpot from "./ReserveSpot";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<MdWorkOutline />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ReserveSpot
          title="reserve your spot"
          subtitle="Software Developer To be decided"
          icon={<TbServer />}
        />
        <ReserveSpot
          title="reserve your spot"
          subtitle="FrontEnd Developer To be decided"
          icon={<MdJavascript />}
        />
        <ReserveSpot
          title="reserve your spot"
          subtitle="Web developer To be decided"
          icon={<MdOutlineDeveloperMode />}
        />
        <ExperienceCard
          title="cBLAST"
          subtitle="Research Intern 2021 - 2022"
          icon={<GiArchiveResearch />}
        />
      </div>
    </div>
  );
};

export default Experience;
