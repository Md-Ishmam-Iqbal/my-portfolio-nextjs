import { SiInformatica } from "react-icons/si";

import Title from "./Title";

const AboutMe = () => {
  return (
    <div className="wrapper">
      <Title text="About Me" icon={<SiInformatica />} />
      <div className="text-lg tracking-wide flex flex-col gap-6">
        <p>
          Honesty is the practice of speaking and acting truthfully and with
          integrity, and it is essential to building trust and respect in our
          relationships. Whether its being honest with ourselves and others
          about our thoughts and feelings, admitting our mistakes and
          shortcomings, or communicating clearly and transparently, honesty can
          create a sense of authenticity and connection in our interactions with
          others.
        </p>
        <p>
          Humility is the practice of recognizing our limitations and
          imperfections, and it is essential to personal growth and development.
          Whether its acknowledging our mistakes and shortcomings, seeking
          feedback from others, or approaching new situations with a sense of
          openness and curiosity, humility can help us learn and grow in
          meaningful ways.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
