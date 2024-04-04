import foguete from '../../assets/ilustracao/foguete.png'
import linkedin from '../../assets/icones/linkedin-icon.svg'
import github from '../../assets/icones/github-icon.svg'
import './Inicio.css'

const Inicio = () => {
    return (
        <section id="inicio">
            <div className="max-w-tela-desk w-full h-900 flex items-center justify-between m-auto">
                <div className='max-w-texto-inicio w-full'>
                    <h1 className="text-c0 text-4xl font-titulo text-38" id='titulo'>Olá, eu sou <br /> Thiago Marins 👋 <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2 text-32">Desenvolvedor Front-end</span>
                    </h1>
                    <p className="text-c1 font-texto max-w-texto-inicio text-18">Olá, eu sou Thiago Marins, desenvolvedor front-end com conhecimentos sólidos em <strong>JavaScript</strong>, <strong>React JS</strong> e estou me dedicando a aprender <strong>TypeScript</strong>. Tenho alta capacidade de aprender coisas novas e estou sempre em busca de aprimoramento.</p>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/thiagossmarins/" target='blank'>
                            <img src={linkedin} alt="linkedin icon" />
                        </a>
                        <a href="https://github.com/thiagossmarins" target='blank'>
                            <img src={github} alt="github icon" />
                        </a>
                    </div>
                </div>
                <div className='container mt-11'>
                    <img id='ilustracao-foguete' className='animated-image' src={foguete} alt="foguete-ilustracao" />
                </div>
            </div>
        </section>
    )
}

export default Inicio