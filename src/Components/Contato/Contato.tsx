import { useState } from 'react'
import ilustracao from '../../assets/ilustracao/Innovation-amico 1.svg'
import ButtonForm from '../Button/ButtonForm'
import './Contato.css'
import emailjs from '@emailjs/browser'

const Contato = () => {
  const [name, setName] = useState<string>('');
  const [sobrenome, setSobrenome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  const enviarEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      last_name: sobrenome,
      email: email,
      phone: telefone,
      message: mensagem,
    }

    emailjs.send("service_1xgzkxx", "template_b3im99f", templateParams, "wTxDpwcQtCQ9STIMj")
    .then((response) =>  {
      console.log("Email Enviado", response.status, response.text)
      setName('')
      setSobrenome('')
      setEmail('')
      setTelefone('')
      setMensagem('')
    }, (error) => {
      console.log("Erro: ", error);
    })
  }

  return (
    <section id="contato">
      <div id='container' className='w-full h-600 max-w-tela-desk flex items-center justify-center m-auto flex-row-reverse'>
        <div className='flex justify-center flex-col formulario'>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-e4 to-e2 text-42 font-semibold font-titulo mr-auto mt-20 mb-32" id='titulo-contato'>Contato</h2>
          <form className="mx-auto my-0 gap-4 grid grid-cols-1 md:grid-cols-2" onSubmit={enviarEmail}>
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65 focus:bg-white focus:bg-opacity-25 focus:outline-none" required type="text" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name} />
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65  focus:bg-white focus:bg-opacity-25 focus:outline-none" required type="text" placeholder="Sobreome" onChange={(e) => setSobrenome(e.target.value)} value={sobrenome} />
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65  focus:bg-white focus:bg-opacity-25 focus:outline-none" required type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
            <input className="bg-white text-c1 bg-opacity-10 font-texto p-5 rounded-2xl h-65  focus:bg-white focus:bg-opacity-25 focus:outline-none" type="tel" placeholder="Telefone" onChange={(e) => setTelefone(e.target.value)} value={telefone} />
            <textarea className="bg-white text-c1 bg-opacity-10 resize-none font-texto p-5 rounded-2xl h-52  md:col-span-2 focus:bg-white focus:bg-opacity-25 focus:outline-none" placeholder="Digite seu nome aqui" onChange={(e) => setMensagem(e.target.value)} value={mensagem}></textarea>
            <ButtonForm />
          </form>
        </div>

        <div className='flex justify-between items-center mx-auto mb-6 mt-auto' id='ilustracao'>
          <img className='flex justify-center items-center mr-60' src={ilustracao} alt="ilustracao" />
        </div>
      </div>
    </section>
  )
}

export default Contato