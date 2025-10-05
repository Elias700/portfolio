
const App = () => {
   
    return (
        
        <div className="min-h-screen flex justify-center items-center bg-[#20272F] p-4 sm:p-8">
    
            <div
                className="max-w-md w-full bg-gradient-to-br from-[#2E3138] to-[#205251] rounded-xl shadow-2xl overflow-hidden p-8 space-y-6 slideInFromLeft"
            >
                <h2
                    className="text-center text-4xl font-extrabold text-[#CBCCD1] appear" 
                >
                    Contato
                </h2>
                <p className="text-center text-[#CBCCD1] appear"> 
                    Quer enviar uma mensagem? Preencha o formulário abaixo.
                </p>
                <form method="POST" action="#" className="space-y-6">
                    <div className="relative">
                        <input
                            placeholder="Nome"
                            className="peer h-10 w-full border-b-2 border-gray-600 text-[#CBCCD1] bg-transparent placeholder-transparent focus:outline-none focus:border-[#00B58C]" 
                            id="name" 
                            name="name"
                            type="text" 
                            required
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#00B58C] peer-focus:text-sm" 
                            htmlFor="name"
                        >
                            Nome
                        </label>
                    </div>
                    <div className="relative">
                        <input
                            placeholder="Email"
                            className="peer h-10 w-full border-b-2 border-gray-600 text-[#CBCCD1] bg-transparent placeholder-transparent focus:outline-none focus:border-[#00B58C]" 
                            id="email"
                            name="email"
                            type="email"
                            required
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#00B58C] peer-focus:text-sm" 
                            htmlFor="email" 
                        >
                            Email
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            placeholder="Telefone"
                            className="peer h-10 w-full border-b-2 border-gray-600 text-[#CBCCD1] bg-transparent placeholder-transparent focus:outline-none focus:border-[#00B58C]" 
                            id="phone" 
                            name="phone"
                            type="tel" 
                            required
                        />
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-[#00B58C] peer-focus:text-sm"
                            htmlFor="phone" 
                        >
                            Telefone
                        </label>
                    </div>

                    
                    <div className="relative pb-4"> 
                        <textarea
                            placeholder="Digite sua mensagem detalhada aqui..."
                            className="peer w-full pt-6 min-h-[6rem] border-b-2 border-gray-600 text-[#CBCCD1] bg-transparent placeholder-transparent focus:outline-none focus:border-[#00B58C] resize-none"
                            id="message"
                            name="message"
                            required
                        ></textarea>
                        <label
                            className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-6 peer-focus:-top-3.5 peer-focus:text-[#00B58C] peer-focus:text-sm"
                            htmlFor="message" 
                        >
                            Mensagem
                        </label>
                    </div>

                     <div className="flex justify-center">
                        <button 
                        className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#00B58C] backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-2xl hover:shadow-[#00B58C] border border-[#0f745c] cursor-pointer w-60">
                        <span className="text-lg">Enviar mensagem</span>
                        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                        <div className="relative h-full w-10 bg-[#fff]"></div>
                        </div>
                    </button>
                     </div>
                </form>

            </div>
        </div>
    );
};

export default App;



