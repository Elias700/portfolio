
//https://www.blobmaker.app/
import image from '../../assets/elias.jpg'

const About = () => {
    return (
        <div>
            <h2 className='text-center text-4xl text-[#00B58C] p-12 '>Sobre mim</h2>
            <section className="flex flex-col md:flex-row justify-center items-center gap-50 px-4">
                <div className='border-2 border-[#00B58C] p-6 max-w-lg rounded-2xl'>
                    <p className='bg-transparent text-[#24A148] text-lg leading-relaxed'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia reprehenderit modi quibusdam saepe ipsa odit ea porro iste! Voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem nobis corporis autem vero facilis animi cupiditate. Ratione voluptates reprehenderit rerum saepe iure autem. Illum, excepturi asperiores? Maiores, sunt voluptas. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perferendis officiis tenetur dolore molestiae iusto magnam praesentium numquam officia labore vero soluta unde quisquam, reprehenderit laudantium magni nesciunt placeat illo?
                    </p>
                </div>
                <img src={image} alt="Elias Riberio" className=' md:w-1/4 h-auto rounded-lg shadow-lg'/>
            </section>
            
        </div>
    )
};

export default About;


