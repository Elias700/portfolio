
import './App.css'

/* Imagem */
import Img from './assets/elias.png'

/* Componentes */
import Menu from './components/Menu'
import Home from './components/Home'
import Sobre from './components/Sobre'
import Habilidades from './components/Habilidades'
import Projetos from './components/Projetos'

function App() {

  return (
    <>
      <Menu />
      <Home Img={Img}/>
      <Sobre />
      <Habilidades />
      <Projetos />
    </>
  )
}

export default App
