// 3 - alterando valor do contexto
// parte da 3 - import { useContext } from "react"
// parte da 3 - import {CounterContext} from '../context/CounterContext'
import ChangeContext from "../components/ChangeContext"

// 4 - refatorando com o hook
import { useCounterContext } from '../hooks/useCounterContext'


const Home = () => {
  // parte da 3 - const {count} = useContext(CounterContext)

  const {count} = useCounterContext()

  return (
    <div>
        <h1>home</h1>
        <p>valor do contador: {count}</p>
        <ChangeContext />
    </div>
  )
}

export default Home