
const Footer = () => {
  return (
    <footer id="footer" className="h-350">
      <div className="className='w-full max-w-tela-desk justify-between items-center mx-auto my-0">
        <nav>
          <ul className='flex gap-16 items-center text-lg pt-24'>
            <li><a className='text-c0 font-titulo' href="#inicio">Inicio</a></li>
            <li><a className='text-c0 font-titulo' href="#skills">Skills</a></li>
            <li><a className='text-c0 font-titulo' href="#projetos">Projetos</a></li>
            <li><a className='text-c0 font-titulo' href="#projetos">Contato</a></li>
          </ul>
        </nav>
        <div className="mt-28">
          <div className="flex m-auto flex-col items-center justify-end">
            <p className="text-c1 font-titulo text-22 text-center"><span className='font-texto text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2'>&lt;/</span>Thiago<span className='font-texto text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2'>&gt;</span></p>
            <p className="text-c1 font-texto text-16 mb-20 text-center">© Copyright 2024 - Desenvolvido por <a className="font-semibold" href="https://github.com/thiagossmarins">@thiagossmarins</a></p>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer