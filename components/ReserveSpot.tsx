import { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: ReactNode;
}

const ReserveSpot = ({ title, subtitle, icon }: Props) => {
  return (
    <div className="flex items-center gap-4 group">
      <span className="w-12 h-12 rounded-full bg-white border-[1px] border-cyan-700 flex items-center justify-center group-hover:border-black group-hover:bg-slate-200">
        <span className="text-2xl">{icon}</span>
      </span>
      <div>
        <a href="mailto:iqbal.ishmam@gmail.com">
          <h3 className="text-2xl font-bold hover:cursor-pointer">{title}</h3>
        </a>
        <p className="text-base tracking-wide text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default ReserveSpot;
