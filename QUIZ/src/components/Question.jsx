import { useContext } from 'react'
import { QuizContext } from '../context/quiz'
import './Question.css'

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    const currentQuestion = quizState.question[quizState.currentQuestion]



  return (
    <div id='question'>
        <p>Pergunta {quizState.currentQuestion + 1} de {quizState.question.length}</p>
        <h2>{currentQuestion.question}</h2>
        <div className='options-container'>
            <p>Opções</p>
        </div>
        <button onClick={() => dispatch({type: 'CHANGE_QUESTION'})}>continuar</button>
    </div>
  )
}

export default Question