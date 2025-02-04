
import './App.css'

import Img from './assets/elias.png'

/* Componentes */
import Menu from './components/Menu'
import Home from './components/Home'
import Sobre from './components/Sobre'

function App() {


  return (
    <>
      <Menu />
      <Home Img={Img}/>
      <Sobre />
    </>
  )
}

export default App
