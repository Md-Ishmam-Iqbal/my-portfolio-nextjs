import { ReactNode } from "react";

interface Props {
  text: string;
  icon: ReactNode;
}

const Title = ({ text, icon }: Props) => {
  return (
    <div className="w-fit text-2xl flex items-center gap-4 group pb-6">
      <h3 className="font-semibold relative overflow-hidden">
        {text}{" "}
        <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-cyan-800 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-200"></span>
      </h3>
      <span className="text-cyan-800">{icon}</span>
    </div>
  );
};

export default Title;
