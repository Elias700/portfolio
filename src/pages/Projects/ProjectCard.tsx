// ProjectCard.tsx
type ProjectProps = {
  name: string;
  description: string;
  imageUrl: string;
};

const ProjectCard = ({ name, description, imageUrl }: ProjectProps) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg transition">
      <img
        src={imageUrl || "/placeholder.png"}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProjectCard;
