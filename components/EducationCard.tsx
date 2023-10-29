
import { ReactNode } from "react";

interface Props {
  level: string;
  institute: string;
  timeRange: string;
}

const EducationCard = ({ level, institute, timeRange }: Props) => {
  return (
    <div className="flex items-center gap-4 mt-2">
      <div>
        <h3 className="text-2xl font-medium">{level}</h3>
        <h4 className="text-xl font-normal">{institute}</h4>
        <p className="text-base tracking-wide text-gray-500">{timeRange}</p>
      </div>
    </div>
  );
};

export default EducationCard;
