import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

const ReserveSpot = ({ title, subtitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4">
      <span className="w-12 h-12 rounded-full bg-black border-[1px] border-blue-600 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <h3 className="text-2xl font-bold hover:cursor-pointer">{title}</h3>
        <p className="text-base tracking-wide text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default ReserveSpot;
