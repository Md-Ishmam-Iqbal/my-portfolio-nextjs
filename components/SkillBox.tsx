interface Props {
  link: string;
  name: string;
}

const SkillBox = ({ link, name }: Props) => {
  return (
    <a href={link} target="blank">
      <p className="border border-black px-6 py-2 text-lg tracking-wide bg-transparent text-black hover:text-white hover:border-white hover:bg-black rounded-lg duration-300">
        {name}
      </p>
    </a>
  );
};

export default SkillBox;
