
type ProjectProps = {
  name: string;
  description: string;
  imageUrl: string;
};

const ProjectCard = ({ name, description, imageUrl }: ProjectProps) => {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-gradient-to-br from-[#2E3138] to-[#205251] bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img
            src={imageUrl}
            alt={name}
            className="w-full h-40 object-cover rounded-md mb-3"
          />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-white">
        {name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed antialiased text-white">
        {description}
        </p>
      </div>
      <div className="p-6 pt-0 flex gap-20 ">
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-[#00B58C] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
          Deploy
        </button>
        <button data-ripple-light="true" type="button" className="select-none rounded-lg bg-[#00B58C] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none cursor-pointer">
          Github
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;


//  <div className="border-none rounded-lg bg-[#00B58C] shadow-md p-4 hover:shadow-lg  cursor-pointer w-100 flex flex-col transition hover:scale-[1.02]">
//       <img
//         src={imageUrl}
//         alt={name}
//         className="w-full h-40 object-cover rounded-md mb-3"
//       />
//       <h2 className="text-xl font-semibold text-[#fff]">{name}</h2>
//       <p className="text-[#fff]">{description}</p>
//     </div>