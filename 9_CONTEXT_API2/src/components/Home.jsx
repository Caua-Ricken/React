import { CounterContext } from "../context/CounterContext"
import { useContext } from "react"
import ChangeCounter from './ChangeCounter'

const Home = () => {
    const {count} = useContext(CounterContext)
  return (
    <div>
        <h1>valor do contador: {count}</h1>
        <ChangeCounter />
    </div>
  )
}

export default Home