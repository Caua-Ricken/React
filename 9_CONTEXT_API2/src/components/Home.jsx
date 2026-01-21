import { useCounterContext } from '../hooks/useCounterContext'
import ChangeCounter from './ChangeCounter'

import { useTitleColor } from '../hooks/useTitleColor'

const Home = () => {
    const {count} = useCounterContext()

    const {state, dispatch} = useTitleColor()

    const setColor = (cor) => {
      dispatch({type: cor})
    }

  return (
    <div>
        <h1>valor do contador:  <p style={{color: state.color}}>{count}</p></h1>
        <button onClick={() => setColor("RED")}>vermelho</button>
        <button onClick={() => setColor("BLUE")}>azul</button>
        <ChangeCounter />
    </div>
  )
}

export default Home