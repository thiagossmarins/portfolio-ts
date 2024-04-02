import './App.css'
import Contato from './Components/Contato/Contato'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Inicio from './Components/Inicio/Inicio'
import Projetos from './Components/Projetos/Projetos'
import Skills from './Components/Skills/Skills'

function App() {

  return (
    <>
      <Header />
      <Inicio />
      <Skills />
      <Projetos />
      <Contato />
      <Footer />
    </>
  )
}

export default App
