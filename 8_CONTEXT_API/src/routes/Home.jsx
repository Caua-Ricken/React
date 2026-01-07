// 3 - alterando valor do contexto
// parte da 3 - import { useContext } from "react"
// parte da 3 - import {CounterContext} from '../context/CounterContext'
import ChangeContext from "../components/ChangeContext"

// 4 - refatorando com o hook
import { useCounterContext } from '../hooks/useCounterContext'

// 5 - contexto mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext"


const Home = () => {
  // parte da 3 - const {count} = useContext(CounterContext)

  const {count} = useCounterContext()

  const {color, dispach} = useTitleColorContext()

  const setTitleColor = (color) => {
    {dispach({type:color})}
  }

  return (
    <div>
        <h1 style={{color: color}}>home</h1>
        <p>valor do contador: {count}</p>
        <ChangeContext />

        {/* 6 - alterando o contexto complexo */}
        <div>
          <button onClick={() => setTitleColor('RED')}>vermelho</button>
          <button onClick={() => setTitleColor('BLUE')}>vermelho</button>
        </div>
    </div>
  )
}

export default Home