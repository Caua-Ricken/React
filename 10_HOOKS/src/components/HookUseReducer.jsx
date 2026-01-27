import { useReducer } from "react"
import { useState } from "react"

const HookUseReducer = () => {

    // pt1 

    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    // pt2

    const initialPaste = [
        {id: 1, text: 'fazer algo'},
        {id: 2, text: 'tanto faz'}
    ]

    const pasteReducer = (state, action) => {   
        switch(action?.type) {
            case 'ADD':
                const newPaste = {
                    id: Math.random(),
                    text: pasteText
                }
                setPasteText('')

                return [...state, newPaste]
            case 'REMOVE':
                return state.filter((task) => task.id !== action.id)        
            default:
                return state
        }
    }

    const [pasteText, setPasteText] = useState('')
    const [pastes, dispatchPaste] = useReducer(pasteReducer, initialPaste)

    const handleSubmit =(e) => {
        e.preventDefault()

        dispatchPaste({type: 'ADD'})
    } 

    const removePast = (id) => {
        dispatchPaste({type: 'REMOVE', id})
    }

  return (
    <div>
        {/* pt1 */}
        <h2>useReducer</h2>
        <p>numero: {number}</p>
        <button onClick={dispatch}>alterar numero</button>

        {/* pt2 */}
        <h2>tarefas:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setPasteText(e.target.value)} value={pasteText} />
            <input type="submit" value='enviar' />
        </form>
        <ul>
            {pastes.map((past) => (
                <li key={past.id} onDoubleClick={() => removePast(task.id)}>{past.text}</li>
            ))}
        </ul>

        <hr />
    </div>
  )
}

export default HookUseReducer