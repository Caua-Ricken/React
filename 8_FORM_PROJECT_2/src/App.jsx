import './App.css'

//components
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import UserForm from './components/UserForm'
import ReviewForm from './components/ReviewForm'
import Thanks from './components/Thanks'

//hooks
import { useForm } from './hooks/useForm'

function App() {

  const formComponents = [
    <UserForm/>,
    <ReviewForm/>,
    <Thanks/>
  ]

  const {currentStep, currentComponent} = useForm(formComponents)

  return (
   <div className="app">
    <div className='container'>
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulario abaixo para avaliar o produto </p>
      </div>
      <div className="form-container">
        <p>etapas</p>

        <form>
          <div className="inputs-container">
            {currentComponent}
          </div>


          <div className="actions">
            <button type='button'>
              <GrFormPrevious/>
              <span>voltar</span></button>

            <button type='submit'>
              <span>avançar</span>
              <GrFormNext/>
            </button>
          </div>

        </form>

      </div>
    </div>
   </div>  
  )
}

export default App
