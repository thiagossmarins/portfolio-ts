import Logo from "../Logo/Logo"

const Footer = () => {
  return (
    <footer id="footer" className="h-350">
      <div className="className='w-full max-w-tela-desk justify-between items-center mx-auto my-0 pt-48">
        <div className="flex m-auto flex-col items-center justify-end ">
          <Logo />
          <p className="text-c1 font-texto text-16 mb-20 text-center">© Copyright 2024 - Desenvolvido por <a className="font-semibold" href="https://github.com/thiagossmarins" target="_blank">@thiagossmarins</a></p>
        </div>
      </div>
    </footer>
  )
}
export default Footer