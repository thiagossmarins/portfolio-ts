import js from '../../assets/skills/javascript-original.svg'
import react from '../../assets/skills/react-original.svg'
import html from '../../assets/skills/html5-original.svg'
import css from '../../assets/skills/css3-original.svg'
import git from '../../assets/skills/git-original.svg'
import tailwind from '../../assets/skills/tailwindcss-original.svg'
import jquery from '../../assets/skills/jquery-plain-wordmark.svg'
import php from '../../assets/skills/php-original.svg'
import mysql from '../../assets/skills/mysql-original-wordmark.svg'
import './Skills.css'

const Skills = () => {
    return (
        <section id='skills' className='flex max-h-skills' >
            <div className='flex justify-center items-center m-auto w-full max-w-container flex-col bg-c4 rounded-50 h-400 mb-96' id='container-pai'>
                <div>
                    <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2 text-38 text-center font-semibold font-titulo">Skills</h2>
                    <p className='text-center text-18 m-auto font-texto text-c1 max-w-texto-skill'>Atual Conhecimento e Estudos em Andamento</p>
                </div>
                <div id='pai-habilidade'>
                    <div className='flex justify-center mx-auto gap-6 mt-8 mb-11 h-55' id='habilidades'>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={react} alt="" />
                        <img src={jquery} alt="" />
                        <img src={tailwind} alt="" />
                        <img src={git} alt="" />
                        <img src={php} alt="" />
                        <img src={mysql} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills