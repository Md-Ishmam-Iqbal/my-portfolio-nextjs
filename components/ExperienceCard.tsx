import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

const ExperienceCard = ({ title, subtitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-slate-200 border-[1px] border-black flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base tracking-wide text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
