
type ProjectProps = {
  name: string;
  description: string;
  imageUrl: string;
};

const ProjectCard = ({ name, description, imageUrl }: ProjectProps) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-[#2E3138] to-[#205251] bg-clip-border text-gray-700 shadow-md transition hover:scale-[1.02]">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-green-gray-500 bg-clip-border text-white shadow-lg shadow-green-gray-500/40 ">
        <img
            src={imageUrl}
            alt={name}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-green-gray-900 antialiased text-white">
        {name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed antialiased text-white">
        {description}
        </p>
      </div>
      <div className="p-6 pt-0 flex gap-20 ">
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-[#00B58C] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
          Deploy
        </button>
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-[#00B58C] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
          Github
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;


