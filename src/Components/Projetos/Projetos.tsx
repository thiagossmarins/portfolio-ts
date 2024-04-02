import dogs from '../../assets/project-images/dogs/dogs.webp';
import carrinho from '../../assets/project-images/carrinho-de-compras/carrinho-de-compras.webp';
import rickandmorty from '../../assets/project-images/rick-and-morty/rick-and-morty.webp';

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
                                <a className='icone-svg' href="https://github.com/thiagossmarins/react-dogs" target="_blank">
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0C3.58175 0 0 3.58175 0 8C0 11.8659 2.63562 15.2215 6.30236 15.9122C6.88453 15.9864 7.09672 15.6053 7.09672 15.3388C7.09672 15.0536 7.08521 14.1762 7.0793 13.0629C4.92603 13.7644 4.18485 12.6207 4.18485 12.6207C3.68772 11.8111 2.93125 11.4741 2.93125 11.4741C2.00425 10.8209 3.05843 10.8387 3.05843 10.8387C4.15218 10.8875 4.69894 11.9256 4.69894 11.9256C5.52089 13.0844 6.55699 12.7683 7.10242 12.499C7.18843 11.924 7.42003 11.4976 7.67986 11.2462C5.24213 10.9772 2.98275 9.95657 2.98275 7.07259C2.98275 6.17042 3.28153 5.41957 3.83369 4.83344C3.7315 4.58514 3.39396 3.71997 3.90147 2.78733C3.90147 2.78733 4.8873 2.47545 7.08515 3.89534C7.08515 3.89534 8.45814 3.51164 8 2.00759C7.55516 3.51164 8.92814 3.89534 8.92814 3.89534C11.126 2.47545 12.1121 2.78733 12.1121 2.78733C12.6196 3.71997 12.2821 4.58514 12.1799 4.83344C12.7321 5.41957 13.0309 6.17042 13.0309 7.07259C13.0309 9.96199 10.7702 10.9769 8.33243 11.2462C8.59415 11.4947 8.80907 11.9981 8.80907 12.6894C8.80907 13.1579 8.8016 13.8464 8.79273 14.3902C8.78001 15.1582 8.99423 15.9864 8.99423 15.9864C8.99423 15.9864 9.2073 15.9864 9.44143 15.9122C13.3642 15.2215 16 11.8659 16 8C16 3.58175 12.4183 0 8 0Z"
                                            fill="white" />
                                    </svg>
                                </a>
                                <a href="https://react-dogs-rede-social.vercel.app/" target="_blank">
                                    <svg className='icone-svg' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 0C11.8086 0 11.25 0.558594 11.25 1.25C11.25 1.94141 11.8086 2.5 12.5 2.5H15.7305L7.86719 10.3672C7.37891 10.8555 7.37891 11.6484 7.86719 12.1367C8.35547 12.625 9.14844 12.625 9.63672 12.1367L17.5 4.26953V7.5C17.5 8.19141 18.0586 8.75 18.75 8.75C19.4414 8.75 20 8.19141 20 7.5V1.25C20 0.558594 19.4414 0 18.75 0H12.5ZM3.125 1.25C1.39844 1.25 0 2.64844 0 4.375V16.875C0 18.6016 1.39844 20 3.125 20H15.625C17.3516 20 18.75 18.6016 18.75 16.875V12.5C18.75 11.8086 18.1914 11.25 17.5 11.25C16.8086 11.25 16.25 11.8086 16.25 12.5V16.875C16.25 17.2188 15.9688 17.5 15.625 17.5H3.125C2.78125 17.5 2.5 17.2188 2.5 16.875V4.375C2.5 4.03125 2.78125 3.75 3.125 3.75H7.5C8.19141 3.75 8.75 3.19141 8.75 2.5C8.75 1.80859 8.19141 1.25 7.5 1.25H3.125Z" fill="#F1F1F1" />
                                    </svg>
                                </a>
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
                                <a className='icone-svg' href="https://github.com/thiagossmarins/react-carrinho-de-compras" target="_blank">
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0C3.58175 0 0 3.58175 0 8C0 11.8659 2.63562 15.2215 6.30236 15.9122C6.88453 15.9864 7.09672 15.6053 7.09672 15.3388C7.09672 15.0536 7.08521 14.1762 7.0793 13.0629C4.92603 13.7644 4.18485 12.6207 4.18485 12.6207C3.68772 11.8111 2.93125 11.4741 2.93125 11.4741C2.00425 10.8209 3.05843 10.8387 3.05843 10.8387C4.15218 10.8875 4.69894 11.9256 4.69894 11.9256C5.52089 13.0844 6.55699 12.7683 7.10242 12.499C7.18843 11.924 7.42003 11.4976 7.67986 11.2462C5.24213 10.9772 2.98275 9.95657 2.98275 7.07259C2.98275 6.17042 3.28153 5.41957 3.83369 4.83344C3.7315 4.58514 3.39396 3.71997 3.90147 2.78733C3.90147 2.78733 4.8873 2.47545 7.08515 3.89534C7.08515 3.89534 8.45814 3.51164 8 2.00759C7.55516 3.51164 8.92814 3.89534 8.92814 3.89534C11.126 2.47545 12.1121 2.78733 12.1121 2.78733C12.6196 3.71997 12.2821 4.58514 12.1799 4.83344C12.7321 5.41957 13.0309 6.17042 13.0309 7.07259C13.0309 9.96199 10.7702 10.9769 8.33243 11.2462C8.59415 11.4947 8.80907 11.9981 8.80907 12.6894C8.80907 13.1579 8.8016 13.8464 8.79273 14.3902C8.78001 15.1582 8.99423 15.9864 8.99423 15.9864C8.99423 15.9864 9.2073 15.9864 9.44143 15.9122C13.3642 15.2215 16 11.8659 16 8C16 3.58175 12.4183 0 8 0Z"
                                            fill="white" />
                                    </svg>
                                </a>
                                <a href="https://react-app-carrinho-de-compras.vercel.app/" target="_blank">
                                    <svg className='icone-svg' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 0C11.8086 0 11.25 0.558594 11.25 1.25C11.25 1.94141 11.8086 2.5 12.5 2.5H15.7305L7.86719 10.3672C7.37891 10.8555 7.37891 11.6484 7.86719 12.1367C8.35547 12.625 9.14844 12.625 9.63672 12.1367L17.5 4.26953V7.5C17.5 8.19141 18.0586 8.75 18.75 8.75C19.4414 8.75 20 8.19141 20 7.5V1.25C20 0.558594 19.4414 0 18.75 0H12.5ZM3.125 1.25C1.39844 1.25 0 2.64844 0 4.375V16.875C0 18.6016 1.39844 20 3.125 20H15.625C17.3516 20 18.75 18.6016 18.75 16.875V12.5C18.75 11.8086 18.1914 11.25 17.5 11.25C16.8086 11.25 16.25 11.8086 16.25 12.5V16.875C16.25 17.2188 15.9688 17.5 15.625 17.5H3.125C2.78125 17.5 2.5 17.2188 2.5 16.875V4.375C2.5 4.03125 2.78125 3.75 3.125 3.75H7.5C8.19141 3.75 8.75 3.19141 8.75 2.5C8.75 1.80859 8.19141 1.25 7.5 1.25H3.125Z" fill="#F1F1F1" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <a href="https://react-app-rick-and-morty-wiki.vercel.app/" target="_blank">
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
                                <a className='icone-svg' href="https://github.com/thiagossmarins/react-rick-and-morty" target="_blank">
                                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M8 0C3.58175 0 0 3.58175 0 8C0 11.8659 2.63562 15.2215 6.30236 15.9122C6.88453 15.9864 7.09672 15.6053 7.09672 15.3388C7.09672 15.0536 7.08521 14.1762 7.0793 13.0629C4.92603 13.7644 4.18485 12.6207 4.18485 12.6207C3.68772 11.8111 2.93125 11.4741 2.93125 11.4741C2.00425 10.8209 3.05843 10.8387 3.05843 10.8387C4.15218 10.8875 4.69894 11.9256 4.69894 11.9256C5.52089 13.0844 6.55699 12.7683 7.10242 12.499C7.18843 11.924 7.42003 11.4976 7.67986 11.2462C5.24213 10.9772 2.98275 9.95657 2.98275 7.07259C2.98275 6.17042 3.28153 5.41957 3.83369 4.83344C3.7315 4.58514 3.39396 3.71997 3.90147 2.78733C3.90147 2.78733 4.8873 2.47545 7.08515 3.89534C7.08515 3.89534 8.45814 3.51164 8 2.00759C7.55516 3.51164 8.92814 3.89534 8.92814 3.89534C11.126 2.47545 12.1121 2.78733 12.1121 2.78733C12.6196 3.71997 12.2821 4.58514 12.1799 4.83344C12.7321 5.41957 13.0309 6.17042 13.0309 7.07259C13.0309 9.96199 10.7702 10.9769 8.33243 11.2462C8.59415 11.4947 8.80907 11.9981 8.80907 12.6894C8.80907 13.1579 8.8016 13.8464 8.79273 14.3902C8.78001 15.1582 8.99423 15.9864 8.99423 15.9864C8.99423 15.9864 9.2073 15.9864 9.44143 15.9122C13.3642 15.2215 16 11.8659 16 8C16 3.58175 12.4183 0 8 0Z"
                                            fill="white" />
                                    </svg>
                                </a>
                                <a href="https://react-app-rick-and-morty-wiki.vercel.app/" target="_blank">
                                    <svg className='icone-svg' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 0C11.8086 0 11.25 0.558594 11.25 1.25C11.25 1.94141 11.8086 2.5 12.5 2.5H15.7305L7.86719 10.3672C7.37891 10.8555 7.37891 11.6484 7.86719 12.1367C8.35547 12.625 9.14844 12.625 9.63672 12.1367L17.5 4.26953V7.5C17.5 8.19141 18.0586 8.75 18.75 8.75C19.4414 8.75 20 8.19141 20 7.5V1.25C20 0.558594 19.4414 0 18.75 0H12.5ZM3.125 1.25C1.39844 1.25 0 2.64844 0 4.375V16.875C0 18.6016 1.39844 20 3.125 20H15.625C17.3516 20 18.75 18.6016 18.75 16.875V12.5C18.75 11.8086 18.1914 11.25 17.5 11.25C16.8086 11.25 16.25 11.8086 16.25 12.5V16.875C16.25 17.2188 15.9688 17.5 15.625 17.5H3.125C2.78125 17.5 2.5 17.2188 2.5 16.875V4.375C2.5 4.03125 2.78125 3.75 3.125 3.75H7.5C8.19141 3.75 8.75 3.19141 8.75 2.5C8.75 1.80859 8.19141 1.25 7.5 1.25H3.125Z" fill="#F1F1F1" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Projetos