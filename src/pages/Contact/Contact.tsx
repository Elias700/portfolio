

const Contact = () => {
    return (
        <div className="h-[85vh] w-[100%] bg-[#20272F]">
            <h1 className="text-center text-4xl text-[#00B58C] p-10">Contato</h1>
            <div className=" flex justify-center items-center">
                <div className="bg-[#2E3138] h-150 w-150 flex justify-center items-center rounded-2xl">
                    <form className="[&>input]:border-2 [&>input]:p-3 [&>input]:w-80 [&>input]:rounded-2xl [&>input]:border-[#00B58C] [&>input]:text-[#00B58C] flex flex-col justify-center items-center gap-5 ">
                        <input required type="text" placeholder="Nome"/>
                        <input required type="email" placeholder="Email"/>
                        <input required type="phone" placeholder="Telefone"/>
                        <textarea required className="border-2 rounded-2xl h-40 w-80 border-[#00B58C] text-[#00B58C] placeholder:text-[#00B58C] placeholder:p-2" placeholder="Mensagem"></textarea>
                        <div>
                            <button className="border-2 rounded-2xl p-5 bg-[#00B58C] border-none cursor-pointer hover:bg-[#0b8669] transition duration-[600ms]">Enviar mensagem</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Contact;

