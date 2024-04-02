
const Footer = () => {
  return (
    <footer>
      <nav className="className='flex justify-between items-center h-20 mx-auto max-w-tela-desk">
        <ul className='flex gap-16 items-center text-lg'>
          <li><a className='text-c0 font-titulo' href="#inicio">Inicio</a></li>
          <li><a className='text-c0 font-titulo' href="#skills">Skills</a></li>
          <li><a className='text-c0 font-titulo' href="#projetos">Projetos</a></li>
          <li><a className='text-c0 font-titulo' href="#projetos">Contato</a></li>
        </ul>
      </nav>
      <div className="flex justify-center items-center flex-col">
        <a href="/" className='text-c0 text-2xl font-titulo'><span className='font-texto text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2'>&lt;/</span>Thiago<span className='font-texto text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2'>&gt;</span></a>
        <p className="text-c1 font-texto text-16 mb-20">© Copyright 2024 - Desenvolvido por <a className="font-semibold" href="">@thiagossmarins</a></p>
      </div>
    </footer>
  )
}
export default Footer