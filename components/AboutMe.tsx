/* eslint-disable react/no-unescaped-entities */
import { SiInformatica } from "react-icons/si";

import Title from "./Title";

const AboutMe = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-tight flex flex-col gap-6">
        <p>
I have been passionate about software development for a while now, and I believe this experience has  provided me with the necessary skills to excel in this role. I consider myself adept in HTML, CSS, and JavaScript. For frontend, I primarily worked with ReactJs and its ecosystem (react query, react-router, context etc.). For backend, I have worked with express js and currently learning ruby on rails.
        </p>
        <p>
          When not glued to a screen, I pass my time learning arabic, reading
          islamic books, memorizing the Qur'an and spending time with my family.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
