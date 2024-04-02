import dogs from '../../assets/project-images/dogs/dogs.webp';
import carrinho from '../../assets/project-images/carrinho-de-compras/carrinho-de-compras.webp';
import rickandmorty from '../../assets/project-images/rick-and-morty/rick-and-morty.webp';
import github from '../../assets/icones/github-icon.svg'
import linkExternal from '../../assets/icones/link-external.svg'

const Projetos = () => {
    return (
        <section id="projetos" className="w-full max-w-tela-desk items-center justify-between m-auto">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2 text-32 text-center uppercase font-semibold font-titulo mt-20">Projetos</h2>
            <p className="text-center font-texto text-c1">Meus principais projetos</p>
            <div className='flex gap-32 mt-20 flex-wrap m-auto items-center justify-center'>
                <div>
                    <img className='imagem-projetos w-96 rounded-2xl' src={dogs} alt="" />
                    <div className='mt-8'>
                        <h3 className='font-titulo font-semibold text-c1 text-center text-2xl'>Rede Social Dogs</h3>
                        <p className='font-titulo font-light italic text-c2 text-center mt-1.5'>React App consumindo API</p>
                        <div className='flex items-center justify-center mt-3 gap-x-3'>
                            <img className='h-5' src={github} alt="" />
                            <img className='h-5' src={linkExternal} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <img className='imagem-projetos w-96 rounded-2xl' src={carrinho} alt="" />
                    <div className='mt-8'>
                        <h3 className='font-titulo font-semibold text-c1 text-center text-2xl'>Carrinho de Compras</h3>
                        <p className='font-titulo font-light italic text-c2 text-center mt-1.5'>React App consumindo API</p>
                        <div className='flex items-center justify-center mt-3 gap-x-3'>
                            <img className='h-5' src={github} alt="" />
                            <img className='h-5' src={linkExternal} alt="" />
                        </div>
                    </div>
                </div>
                <div>
                    <img className='imagem-projetos w-96 rounded-2xl' src={rickandmorty} alt="" />
                    <div className=' mt-8'>
                        <h3 className='font-titulo font-semibold text-c1 text-center text-2xl'>Rick and Morty</h3>
                        <p className='font-titulo font-light italic text-c2 text-center mt-1.5'>React App consumindo API</p>
                        <div className='flex items-center justify-center mt-3 gap-x-3'>
                            <img className='h-5' src={github} alt="" />
                            <img className='h-5' src={linkExternal} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projetos