import { data } from './data/data'
import { useState } from 'react'
import ImcCalc from './components/ImcCalc'
import ImcInfo from './components/ImcInfo'
import './App.css'

function App() {

  const calcImc = (e, heigth, weigth) => {
    e.preventDefault('')

    if(!heigth || !weigth){
      return
    }

    const weigthFloat = +weigth.replace(',' , '.')
    const heigthFloat = +heigth.replace(',' , '.')

    const imcResult = (weigthFloat / (heigthFloat * heigthFloat)).toFixed(1)
    setImc(imcResult)

    data.forEach((item) => {
      if(imcResult > item.min && imcResult <= item.max){
        setInfo(item.info)
        setInfoClass(item.infoclass)
      }
    })
    if(!info) return
  }

  const resetCalc = (e) => {
    e.preventDefault()

    setImc('')
    setInfo('')
    setInfoClass('')
  }

  const [imc, setImc] = useState('')
  const [info, setInfo] = useState('')
  const [infoClass, setInfoClass] = useState('')

  return (
    <div className='container'>
     {!imc ? (<ImcCalc calcImc={calcImc}/>) : (<ImcInfo data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>)}
    </div>
  )
}

export default App
