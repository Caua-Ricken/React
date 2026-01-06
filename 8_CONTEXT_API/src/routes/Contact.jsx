// 3 - alterando valor do contexto
import { useContext } from "react"
import {CounterContext} from '../context/CounterContext'

// 4 - refatorando com o hook
import { useCounterContext } from '../hooks/useCounterContext'


const Contact = () => {
   const {count} = useCounterContext()
  return (
    <div>
        <h1>pagina de contato</h1>
        <p>valor do contador: {count}</p>
    </div>
  )
}

export default Contact