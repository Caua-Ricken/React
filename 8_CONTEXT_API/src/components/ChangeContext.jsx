import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

// 4 - refatorando com o hook
import { useCounterContext } from '../hooks/useCounterContext'


const ChangeContext = () => {
    const {count, setCount} = useCounterContext()

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </div>
  )
}

export default ChangeContext