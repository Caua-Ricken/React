import './App.css'

//components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import {FiSend} from 'react-icons/fi'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'
import Steps from './components/Steps'

//hooks
import { useForm } from './hooks/useForm'
import { useState } from 'react'

 const formTemplete = {
    name: '',
    email: '',
    review: '',
    comment: ''
  }

function App() {

  const [data, setData] = useState(formTemplete)

  const updateFiledHnadler = (key, value) => {
    setData((prev) => {
      return {...prev,[key]: value}
    })
  }

  const resetForm = () => {
    setData(formTemplete);
  };

  const formComponents = [
    <UserForm data={data} updateFiledHnadler={updateFiledHnadler}/>,
    <ReviewForm data={data} updateFiledHnadler={updateFiledHnadler}/>,
    <Thanks data={data}/>
  ]

  const {currentStep, currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isLastStep) {
      console.log("Formulário Enviado! Dados:", data); 
      resetForm(); 
    }
    changeStep(currentStep + 1, e);
  };

  return (
   <div className="app">
    <div className='container'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulario abaixo para avaliar o produto </p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>

        <form onSubmit={handleSubmit}>
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

              <button type='submit'>
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
