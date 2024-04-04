import ilustracao from '../../assets/ilustracao/Innovation-amico 1.svg'
import ButtonForm from '../Button/ButtonForm'
import './Contato.css'

const Contato = () => {
  return (
    <section id="contato">
      <div id='container' className='w-full h-600 max-w-tela-desk flex items-center justify-center m-auto flex-row-reverse'>
        <div className='flex justify-center flex-col formulario'>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2 text-42 font-semibold font-titulo mr-auto mt-20 mb-32" id='titulo-contato'>Contato</h2>
          <form className="mx-auto my-0 gap-4 grid grid-cols-1 md:grid-cols-2">
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65 focus:bg-white focus:bg-opacity-25 focus:outline-none" type="text" placeholder="Nome" />
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65  focus:bg-white focus:bg-opacity-25 focus:outline-none" type="text" placeholder="Sobreome" />
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65  focus:bg-white focus:bg-opacity-25 focus:outline-none" type="email" placeholder="Email" />
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65  focus:bg-white focus:bg-opacity-25 focus:outline-none" type="tel" placeholder="Telefone" />
            <textarea className="bg-white text-c1 bg-opacity-10 resize-none font-texto p-5 rounded-2xl h-52  md:col-span-2 focus:bg-white focus:bg-opacity-25 focus:outline-none" placeholder="Digite seu nome aqui"></textarea>
            <ButtonForm />
          </form>
        </div>

        <div className='flex justify-between items-center mx-auto mb-6 mt-auto' id='ilustracao'>
          <img className='flex justify-center items-center mr-60' src={ilustracao} alt="ilustracao" />
        </div>
      </div>
    </section>
  )
}

export default Contato