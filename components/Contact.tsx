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
          Adaptability is the ability to adjust and thrive in changing
          circumstances, and it is essential to navigating the complexities of
          life. Whether its adapting to new technologies, social norms, or
          personal challenges, adaptability allows us to stay resilient and
          flexible in the face of change.
        </p>
        <a href="mailto:iqbal.ishmam@gmail.com">
          <button className="w-52 h-14 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-950 text-xl font-bold text-white rounded-lg hover:from-indigo-950 hover:to-blue-600 duration-300 group">
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
