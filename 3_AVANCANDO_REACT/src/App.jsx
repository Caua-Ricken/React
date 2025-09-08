import './App.css'

//imagem da pasta assets
import imgNigth from './assets/night.jpg'

function App() {

  return (
    <>
    <h1>Avançando em React</h1>
     {/* trazendo imagem de public */}
    <img src="./img.jpg" alt="trazendo imagem de public" />

     {/* trazendo imagem de assets */}
    <img src={imgNigth} alt="" />
    </>
  )
}

export default App
