import Title from "./Title";

import { GiBookshelf } from "react-icons/gi"

import ReserveSpot from "./ReserveSpot";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div className="wrapper">
      <Title text="Education" icon={<GiBookshelf/>} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <EducationCard
	    level={"O levels"}	    
	    institute={"BAF Shaheen English Medium School (BAF SEMS)"}
	    timeRange={"2015"}
	/>
        <EducationCard
	    level={"A levels"}	    
	    institute={"Loreeto School"}
	    timeRange={"2017"}
	/>
        <EducationCard
	    level={"BSc in Biochemistry and Biotechnology"}	    
	    institute={"North South University"}
	    timeRange={"2018-2023"}
        />
      </div>
    </div>
  );
};

export default Education;
