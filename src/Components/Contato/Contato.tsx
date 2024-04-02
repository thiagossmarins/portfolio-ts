import ilustacao from '../../assets/ilustracao/Innovation-amico 1.svg'
import ButtonForm from '../Button/ButtonForm'

const Contato = () => {
  return (
    <section id="contato">
      <div className='w-full max-w-tela-desk h-600 flex items-center justify-between m-auto flex-row-reverse'>
        <div className='flex flex-col'>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2 text-42 uppercase font-semibold font-titulo mr-auto mt-20 mb-32">Contato</h2>
          <form className="mx-auto my-0 gap-4 grid grid-cols-2">
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65 w-250" type="text" placeholder="Nome" />
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65 w-250" type="text" placeholder="Sobreome" />
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65 w-250" type="email" placeholder="Email" />
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65 w-250" type="tel" placeholder="Telefone" />
            <textarea className="bg-white text-c1 bg-opacity-10 resize-none font-texto p-5 rounded-2xl h-52 w-525 col-span-2" placeholder="Digite seu nome aqui"></textarea>
          </form>
          <ButtonForm />
        </div>

        <div>
          <img src={ilustacao} alt="ilustracao" />
        </div>
      </div>


    </section>
  )
}

export default Contato