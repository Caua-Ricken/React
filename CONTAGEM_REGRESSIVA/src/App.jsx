import './App.css'
import Title from './components/Title'
import Counter from './components/Counter'

import img from './assets/imagem.jpg'

function App() {


  return (
    <div className='app' style={{backgroundImage: `url(${img})`}}>
      <div className="container">
        <Title title="Contagem Regressiva" />
        <div className="contador-container"></div>
        <Counter title="Dias" number={2} />
        <Counter title="horas" number={2} />
        <Counter title="minutos" number={2} />
        <Counter title="segundos" number={2} />
      </div>
    </div>
  )
}

export default App
