import js from '../../assets/skills/javascript-original.svg'
import ts from '../../assets/skills/typescript-original.svg'
import react from '../../assets/skills/react-original.svg'
import html from '../../assets/skills/html5-original.svg'
import css from '../../assets/skills/css3-original.svg'
import git from '../../assets/skills/git-original.svg'
import node from '../../assets/skills/nodejs-original (1).svg'
import mongodb from '../../assets/skills/mongodb-plain-wordmark.svg'

const Skills = () => {
    return (
        <section id='skills' className='flex h-500' >
            <div className='flex justify-center items-center m-auto w-full max-w-container flex-col bg-c4 rounded-50 h-400 mb-96'>
                <div>
                    <div>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2 text-38 text-center uppercase font-semibold font-titulo">Skills</h2>
                        <p className='text-center text-18 m-auto font-texto text-c1 max-w-texto-skill'>Atual Conhecimento e Estudos em Andamento</p>
                    </div>
                    <div className='flex gap-6 mt-8 mb-11 h-55'>
                        <img src={js} alt="" />
                        <img src={ts} alt="" />
                        <img src={react} alt="" />
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={git} alt="" />
                        <img src={node} alt="" />
                        <img src={mongodb} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills