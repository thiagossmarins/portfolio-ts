import ilustacao from '../../assets/ilustracao/Innovation-amico 1.svg'

const Contato = () => {
  return (
    <section id="contato" className="w-full max-w-tela-desk h-800 justify-between items-center mx-auto my-0">
      <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2 text-32 text-center uppercase font-semibold font-titulo mt-20">Contato</h2>

      <div className='flex flex-row-reverse items-center'>
        <form className="mx-auto my-0 justify-center gap-2.5 grid grid-cols-2">

          <input className="bg-white bg-opacity-20 font-texto p-5 rounded-2xl h-65 w-250" type="text" placeholder="Nome" />

          <input className="bg-white bg-opacity-20 font-texto p-5 rounded-2xl h-65 w-250" type="text" placeholder="Sobreome" />

          <input className="bg-white bg-opacity-20 font-texto p-5 rounded-2xl h-65 w-250" type="email" placeholder="Email" />

          <input className="bg-white bg-opacity-20 font-texto p-5 rounded-2xl h-65 w-250" type="tel" placeholder="Telefone" />

          <textarea className="bg-white bg-opacity-20 resize-none font-texto p-5 rounded-2xl h-52 w-524 col-span-2" placeholder="Digite seu nome aqui"></textarea>
        </form>

        <div>
          <img src={ilustacao} alt="ilustracao" />
        </div>
      </div>


    </section>
  )
}

export default Contato