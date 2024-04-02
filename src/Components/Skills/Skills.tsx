import js from '../../assets/skills/js.svg'
import ts from '../../assets/skills/ts.svg'
import react from '../../assets/skills/react.svg'
import css from '../../assets/skills/css.svg'
import git from '../../assets/skills/git.svg'
import node from '../../assets/skills/node.svg'
import mongodb from '../../assets/skills/mongodb.svg'

const Skills = () => {
    return (
        <section>
            <div className='flex justify-center m-auto max-w-4xl flex-col bg-c4 rounded-50 max-h-350 h-80'>
                <div>
                    <div>
                        <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2 text-32 text-center uppercase font-semibold font-titulo">Skills</h2>
                        <p className='text-center m-auto font-texto text-c1 max-w-56'>Atual Conhecimento e Estudos em Andamento</p>
                    </div>
                    <div className='flex gap-6 justify-center mt-8 mb-11'>
                        <img src={js} alt="" />
                        <img src={ts} alt="" />
                        <img src={react} alt="" />
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