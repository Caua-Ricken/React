import { useCounterContext } from "../hooks/useCounterContext"

const ChangeCounter = () => {
    const {setCount} = useCounterContext()

  return (
    <div>
        <button onClick={() => setCount((prev) => prev + 1)}>adicionar valor</button>

        <button onClick={() => setCount(0)}>zerar</button>
    </div>
  )
}

export default ChangeCounter