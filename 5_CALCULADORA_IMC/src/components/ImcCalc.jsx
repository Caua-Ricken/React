import { useState } from 'react'
import Button from './Button'
import './ImcCalc.css'

const ImcCalc = ({calcImc}) => {

    const [heigth, setHeigth] = useState('')
    const [weigth, setWeigth] = useState('')

    // parte para limpar
    const clearForm = (e) => {
        e.preventDefault()
        setHeigth('')
        setWeigth('')
    }

    // bloqueando digitos errados 
    const validDigits = (text) => {
        return text.replace(/[^0-9,.]/g, '')
    }

    const handleWeigthChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setWeigth(updateValue)
    }

    const handleHeigthChange = (e) => {
        const updateValue = validDigits(e.target.value)
        setHeigth(updateValue)
    }
    //acaba aqui

  return (
    <div id='calc-container'>
        <h2>calculadora de IMC</h2>
        <form id='imc-form'>
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="heigth">Altura:</label>
                    <input type="text" name='heigth' id='heigth' placeholder='Example: 1.75cm' onChange={(e) => handleHeigthChange(e)} value={heigth}/>
                </div>

                 <div className="form-control">
                    <label htmlFor="weigth">Peso:</label>
                    <input type="text" name='weigth' id='weigth' placeholder='Example: 80.6kg'  onChange={(e) => handleWeigthChange(e)} value={weigth}/>
                </div>
            </div>
            <div className="action-control">
                <Button id='calc-btn' text='Calcular' action={(e) => calcImc(e, heigth ,weigth)}/>
                <Button id='clear-btn' text='Limpar' action={clearForm}/>
            </div>
        </form>

    </div>
  )
}

export default ImcCalc