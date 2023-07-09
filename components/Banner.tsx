/* eslint-disable react/no-unescaped-entities */
import dp1 from "../public/img/dp/dp1.jpeg";
import dp2 from "../public/img/dp/dp2.jpeg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10 pb-10">
      <div className="w-44 h-44 rounded-full bg-slate-200">
        <Image
          className="w-full h-full rounded-full border-[1px] p-2 object-cover border-cyan-800"
          src={dp1}
          alt="ProfileImg"
        />
      </div>
      <div className="w-3/4 flex flex-col items-center text-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-black">Md Ishmam Iqbal</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-600 to-cyan-800 tracking-wide">
          Web Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Assalamu'alaikum, I am Md Ishmam Iqbal, a biochemistry grad finding
          solace in the realm of coding and all things computers.
        </p>
      </div>
    </div>
  );
};

export default Banner;
