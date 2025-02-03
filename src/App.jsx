
import './App.css'
import Menu from './components/Menu'
import Home from './components/Home'
import Img from './assets/elias.png'

function App() {


  return (
    <>
      <Menu />
      <Home Img={Img}/>
    </>
  )
}

export default App
