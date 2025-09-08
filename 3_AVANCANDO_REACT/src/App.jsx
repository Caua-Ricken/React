import './App.css'

//imagem da pasta assets
import imgNigth from './assets/night.jpg'

import Data from './components/Data'

import List from './components/list'

function App() {

  return (
    <>
    <div style={{paddingBottom: "500px"}}>
    <h1>Avançando em React</h1>
     {/* trazendo imagem de public */}
    <img src="./img.jpg" alt="trazendo imagem de public" />

     {/* trazendo imagem de assets */}
    <img src={imgNigth} alt="" />

     {/* usando o useState */}
    <Data/>
    
    <List/>


    </div>
    </>
  )
}

export default App
