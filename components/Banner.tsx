import ProfileImg from "../public/img/profile-img-placeholder.jpeg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="wrapper flex flex-col md:flex-row items-center gap-10">
      <div className="w-44 h-44 rounded-full bg-black">
        <Image
          className="w-full h-full rounded-full border-[1px] p-2 object-cover border-blue-600"
          src={ProfileImg}
          alt="ProfileImg"
        />
      </div>
      <div className="w-3/4 flex flex-col items-center md:items-start gap-2">
        <h1 className="text-5xl font-bold text-white">Md Ishmam Iqbal</h1>
        <h3 className="text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-red-300 to-indigo-300 tracking-wide">
          Web Developer
        </h3>
        <p className="text-base tracking-wide text-center md:text-left">
          Hello I am Md Ishmam Iqbal. Finding the truth wouldnt be easy, thats
          for sure. Then there was the question of whether or not Jane really
          wanted to know the truth. Thats the thing that bothered her most. It
          wasnt the difficulty of actually finding out what happened that was
          the obstacle, but having to live with that information once it was
          found.
        </p>
      </div>
    </div>
  );
};

export default Banner;
