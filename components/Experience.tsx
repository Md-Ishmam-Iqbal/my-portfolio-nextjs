import Title from "./Title";
import {
  MdWorkOutline,
  MdOutlineDeveloperMode,
  MdJavascript,
} from "react-icons/md";
import { TbServer } from "react-icons/tb";
import { GiArchiveResearch } from "react-icons/gi";
import { MdKeyboardCommandKey } from "react-icons/md";

import ReserveSpot from "./ReserveSpot";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="wrapper">
      <Title text="Experience" icon={<MdWorkOutline />} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ExperienceCard
          title="Sazim"
	  role="Full Stack Developer Trainee"
	  duration="2023 - Present"
          icon={<MdKeyboardCommandKey />}
        />
        <ExperienceCard
          title="cBLAST"
	  role="Research Intern"
	  duration="2021 - 2022"
          icon={<GiArchiveResearch />}
        />
      </div>
    </div>
  );
};

export default Experience;
