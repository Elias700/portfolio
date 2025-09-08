
//https://www.blobmaker.app/
import image from '../../assets/elias.jfif'

const About = () => {
    return (
        <div>
            <h2 className='text-center text-4xl text-[#00B58C] p-12 '>Sobre mim</h2>
            <section className="flex flex-col md:flex-row justify-center items-center gap-8 px-4">
                <div className='border-2 border-[#00B58C] p-6 max-w-lg'>
                    <p className='bg-transparent text-[#24A148] text-lg leading-relaxed'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit modi quibusdam saepe ipsa odit ea porro iste! Voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem nobis corporis autem vero facilis animi cupiditate. Ratione voluptates reprehenderit rerum saepe iure autem. Illum, excepturi asperiores? Maiores, sunt voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis officiis tenetur dolore molestiae iusto magnam praesentium numquam officia labore vero soluta unde quisquam, reprehenderit laudantium magni nesciunt placeat illo?
                    </p>
                </div>
                <img src={image} alt="Elias Riberio" className=' md:w-1/4 h-auto rounded-lg shadow-lg'/>
            </section>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#24A148" d="M60.9,-45.7C74.3,-31.8,77.4,-6.7,69.7,11.5C62,29.7,43.6,41,25.9,46.9C8.2,52.7,-8.8,53.2,-18.1,45.6C-27.4,38.1,-29,22.5,-37.7,3.2C-46.4,-16.1,-62.2,-39.1,-57.1,-51.1C-52,-63.2,-26,-64.2,-1.1,-63.3C23.8,-62.4,47.5,-59.6,60.9,-45.7Z" transform="translate(100 100)" />
            </svg>
        </div>
    )
};

export default About;


