import { useCallback, useState } from "react"
import List from "./List"

const HookUseCallback = () => {

    const [count, setCount] = useState(0)

    const getItensFromDataBase = useCallback(() => {
        return['a','b','c']
    }, [])
  return (
    <div>
        <h2>useCallbeck</h2>
        <List getItens={getItensFromDataBase} />
        <button onClick={() => setCount((prev) => prev + 1)}>alterar</button>
        <p>{count}</p>
        <hr />
    </div>
  )
}

export default HookUseCallback