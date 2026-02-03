import { usePrevious } from "../hooks/usePrevius"
import { useState } from "react"

const HookCustom = () => {

    const [number, setNumber] = useState(0) 
    const previusValue = usePrevious(number)
  return (
    <div>
        <h2>Hook Custom</h2>
        <p>Valor: {number}</p>
        <p>Valor antigo: {previusValue}</p>
        <button onClick={() => setNumber((prev) => prev + 1)}>mudar valor</button>
        <hr />
    </div>
  )
}

export default HookCustom