
type ProjectProps = {
  name: string;
  description: string;
  imageUrl: string;
};

const ProjectCard = ({ name, description, imageUrl }: ProjectProps) => {
  return (
    <div className="border-none rounded-lg bg-[#00B58C] shadow-md p-4 hover:shadow-lg  cursor-pointer w-100 flex flex-col transition hover:scale-[1.02]">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-xl font-semibold text-[#fff]">{name}</h2>
      <p className="text-[#fff]">{description}</p>
    </div>
  );
};

export default ProjectCard;
