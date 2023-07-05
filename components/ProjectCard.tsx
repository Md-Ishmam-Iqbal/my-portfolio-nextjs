import Image, { StaticImageData } from "next/image";

interface Props {
  link: string;
  image: string | StaticImageData;
  name: string;
}

const ProjectCard = ({ link, image, name }: Props) => {
  return (
    <a href={link} target="_blank">
      <div className="w-80 h-80 border-[1px] border-blue-600 overflow-hidden relative rounded-lg group">
        <Image
          className="object-cover translate-y-0 group-hover:-translate-y-[45%] transition-transform duration-[2s]"
          src={image}
          alt={name}
        />
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-blue-600 text-white text-center font-semibold duration-300">
          {name}
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;
