import { MdOutlineDeveloperMode } from "react-icons/md";
import SocialLink from "./SocialLink";

const Contact = () => {
  const socials = [
    { title: "Github", link: "https://github.com/Md-Ishmam-Iqbal" },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/md-ishmam-iqbal-427980188/",
    },
  ];

  return (
    <div className="wrapper">
      <div className=" flex flex-col gap-4 items-center justify-center max-2-5xl mx-auto">
        <h2 className="text-2xl font-bold">Contact me</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          Contact: +8801826207551
        </p>
        <a
          href="mailto:iqbal.ishmam@gmail.com"
          className="text-lg tracking-wide font-medium text-center pb-5"
        >
          Email: iqbal.ishmam@gmail.com
        </a>
        <a href="mailto:iqbal.ishmam@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-700 via-sky-800 to-cyan-800 text-xl font-bold text-white rounded-lg hover:bg-gradient-to-tr duration-300 group">
            Say Hello
          </button>
        </a>
        <div className="mt-8 flex items-center flex-wrap gap-8 justify-center">
          {socials.map((platform) => (
            <SocialLink
              key={platform.title}
              title={platform.title}
              link={platform.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
