import './App.css'

//components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

//hooks
import { useForm } from './hooks/useForm'
import Steps from './components/Steps'

function App() {

  const formComponents = [
    <UserForm/>,
    <ReviewForm/>,
    <Thanks/>
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
   <div className="app">
    <div className='container'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulario abaixo para avaliar o produto </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">
            {currentComponent}
          </div>


          <div className="actions">
            {!isFirstStep && (<button type='button' onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious/>
              <span>voltar</span></button>)}
              {!isLastStep ? (

            <button type='submit'>
              <span>avançar</span>
              <GrFormNext/>
            </button>) : (

              <button type='button'>
              <span>enviar</span>
              <FiSend/>
            </button>)}
          </div>

        </form>

      </div>
    </div>
   </div>  
  )
}

export default App
