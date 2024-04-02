import foguete from '../../assets/ilustracao/foguete.png'
import linkedin from '../../assets/icones/linkedin-icon.svg'
import github from '../../assets/icones/github-icon.svg'


const Inicio = () => {
    return (
        <section id="inicio" className="w-full h-screen flex items-center justify-between max-w-tela-desk m-auto">
            <div>
                <h1 className="text-c0 text-4xl font-titulo text-38">Olá, eu sou <br /> Thiago Marins 👋 <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2 text-32">Desenvolvedor Front-end</span>
                </h1>
                <p className="text-c1 font-texto max-w-texto-inicio text-16">Olá, eu sou Thiago Marins, desenvolvedor front-end com conhecimentos em JavaScript, React JS e estou aprendendo TypeScript. Tenho alta capacidade de aprender coisas novas e estou sempre em busca de aprimoramento.</p>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/thiagossmarins/" target='blank'>
                        <img src={linkedin} alt="linkedin icon" />
                    </a>
                    <a href="https://github.com/thiagossmarins" target='blank'>
                        <img src={github} alt="github icon" />
                    </a>
                </div>
            </div>
            <div>
                <img src={foguete} alt="foguete-ilustracao" />
            </div>
        </section>
    )
}

export default Inicio