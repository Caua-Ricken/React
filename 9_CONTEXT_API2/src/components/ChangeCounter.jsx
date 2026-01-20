import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

const ChangeCounter = () => {
    const {setCount} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCount((prev) => prev + 1)}>adicionar valor</button>

        <button onClick={() => setCount(0)}>zerar</button>
    </div>
  )
}

export default ChangeCounter