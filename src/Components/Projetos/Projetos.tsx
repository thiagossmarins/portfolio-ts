import dogs from '../../assets/project-images/dogs/dogs.webp';
import carrinho from '../../assets/project-images/carrinho-de-compras/carrinho-de-compras.webp';
import rickandmorty from '../../assets/project-images/rick-and-morty/rick-and-morty.webp';
import github from '../../assets/icones/github-icon.svg'
import linkExternal from '../../assets/icones/link-external.svg'

const Projetos = () => {
    return (
        <section id="projetos" className="bg-c4 pt-11 h-675">
            <div className='w-full items-center justify-between m-auto'>
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-e4 via-e2 to-e1 text-38 text-center uppercase font-semibold font-titulo mt-12">Projetos</h2>
                <p className="text-center text-18 font-texto text-c1">Meus principais projetos</p>
                <div className='container-img flex gap-32 mt-20 flex-wrap m-auto items-center justify-center pb-32'>

                    <div>
                        <a href="https://react-dogs-rede-social.vercel.app/" target="_blank">
                            <img className='imagem-projetos rounded-2xl cursor-pointer w-400 h-200'
                                src={dogs} alt="projeto-dogs"
                                onMouseOver={(e) => { e.currentTarget.style.width = "420px"; e.currentTarget.style.height = "220px"; }}
                                onMouseOut={(e) => { e.currentTarget.style.width = "400px"; e.currentTarget.style.height = "200px"; }}
                            />
                        </a>
                        <div className='mt-8'>
                            <h3 className='font-titulo font-semibold text-c1 text-center text-2xl'>Rede Social Dogs</h3>
                            <p className='font-titulo font-light italic text-c2 text-center mt-1.5'>React App consumindo API</p>
                            <div className='flex items-center justify-center mt-3 gap-x-3'>
                                <a href="https://github.com/thiagossmarins/react-dogs" target="_blank"><img className='h-5 cursor-pointer links' src={github} alt="github-icon" /></a>
                                <a href="https://react-dogs-rede-social.vercel.app/" target="_blank"><img className='h-5 cursor-pointer links' src={linkExternal} alt="link-external" /></a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <a href="https://react-app-carrinho-de-compras.vercel.app/" target="_blank">
                            <img className='imagem-projetos rounded-2xl cursor-pointer w-400 h-200'
                                src={carrinho} alt="projeto-carrinho-de-compras"
                                onMouseOver={(e) => { e.currentTarget.style.width = "420px"; e.currentTarget.style.height = "220px"; }}
                                onMouseOut={(e) => { e.currentTarget.style.width = "400px"; e.currentTarget.style.height = "200px"; }}
                            />
                        </a>
                        <div className='mt-8'>
                            <h3 className='font-titulo font-semibold text-c1 text-center text-2xl'>Carrinho de Compras</h3>
                            <p className='font-titulo font-light italic text-c2 text-center mt-1.5'>React App consumindo API</p>
                            <div className='flex items-center justify-center mt-3 gap-x-3'>
                                <a href="https://github.com/thiagossmarins/react-carrinho-de-compras" target="_blank"><img className='h-5 cursor-pointer links' src={github} alt="github-icon" /></a>
                                <a href="https://react-app-carrinho-de-compras.vercel.app/" target="_blank"><img className='h-5 cursor-pointer links' src={linkExternal} alt="link-external" /></a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <a href="https://react-dogs-rede-social.vercel.app/" target="_blank">
                            <img className='imagem-projetos rounded-2xl cursor-pointer w-400 h-200'
                                src={rickandmorty} alt="projeto-carrinho-de-compras"
                                onMouseOver={(e) => { e.currentTarget.style.width = "420px"; e.currentTarget.style.height = "220px"; }}
                                onMouseOut={(e) => { e.currentTarget.style.width = "400px"; e.currentTarget.style.height = "200px"; }}
                            />
                        </a>
                        <div className='mt-8'>
                            <h3 className='font-titulo font-semibold text-c1 text-center text-2xl'>Rick and Morty</h3>
                            <p className='font-titulo font-light italic text-c2 text-center mt-1.5'>React App consumindo API</p>
                            <div className='flex items-center justify-center mt-3 gap-x-3'>
                                <a href="https://github.com/thiagossmarins/react-dogs" target="_blank"><img className='h-5 cursor-pointer links' src={github} alt="github-icon" /></a>
                                <a href="https://react-dogs-rede-social.vercel.app/" target="_blank"><img className='h-5 cursor-pointer links' src={linkExternal} alt="link-external" /></a>
                            </div>
                        </div>
                    </div>

                    

                </div>
            </div>
        </section>
    )
}

export default Projetos