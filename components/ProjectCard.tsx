import Image, { StaticImageData } from "next/image";

interface Props {
  link: string;
  image: string | StaticImageData;
  name: string;
  description: string;
}

const ProjectCard = ({ link, image, name, description }: Props) => {
  return (
    <div>
      <a href={link} target="_blank">
        <div className="w-80 h-fit max-h-80 min-h-60 hover:border-[1px] hover:border-cyan-800 hover:scale-110 hover:shadow-[0_3px_8px_3px_rgba(80, 80, 80, 0.3)] transition-transform duration-500 overflow-hidden relative rounded-lg group">
          <Image className="object-cover" src={image} alt={name} />
          <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-cyan-800 text-white text-center font-semibold duration-300">
            {name}
          </p>
        </div>
      </a>
      <p className="text-l pt-10 w-80 text-center">{description}</p>
    </div>
  );
};

// .product-box:hover {
//     transform: scale(1.01);
//     cursor: pointer;
//     box-shadow: 0px 3px 8px 3px rgba(80, 80, 80, 0.3);
// }

export default ProjectCard;
