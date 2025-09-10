import './App.css'

//imagem da pasta assets
import imgNigth from './assets/night.jpg'

import Data from './components/Data'

import List from './components/list'

import ConditionalRender from './components/ConditionalRender'

import ConditionalRender2 from './components/ConditionalRender2'

import ShowUserName from './components/ShowUserName'

import CarDetails from './components/CarDetails'

// renderizacao de lista com componentes
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
];

import Fragment from './components/Fragment'

import Container from './components/Container'

import ExecuteFunction from './components/ExecuteFunction'
import { useState } from 'react'

import Message from './components/Message'

import ChangeMessage from './components/ChangeMessage'


function App() {

  // função em prop
  function showMessage(){
    console.log('evento do componente pai')
  }

  // state lift
const [message, setMessage] = useState('')

const handleMessage = (msg) => {
  setMessage(msg)
}

  return (
    <>
    <div style={{paddingBottom: "500px"}}>
    <h1>Avançando em React</h1>
     {/* trazendo imagem de public */}
    <img src="./img.jpg" alt="trazendo imagem de public" />

     {/* trazendo imagem de assets */}
    <img src={imgNigth} alt="" />

     {/* usando o useState */}
    <Data/>
    
    {/* utilizando listas */}
    <List/>

    {/* condicionais */}
    <ConditionalRender/>

    {/* condicionais com else */}
    <ConditionalRender2/>

    {/* props */}
    <ShowUserName name ='Caua'/>

    {/* desestruturando props */}
    <CarDetails brand = 'fiat' km = {143.789} color = 'azul'/>

    {/* reaproveitamento de componentes */}
    <CarDetails brand = 'vw' km = {59.779} color = 'vermelho'/>
    <CarDetails brand = 'toyota' km = {279.989} color = 'branca'/>

    {/* renderização de listas */}
    {cars.map((car) => (
      <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />
    ))}

    {/* fragments */}
    <Fragment/>

    {/* children */}
    <Container>
          <div>
            <h2>teste</h2>
            <p>alguma coisa</p>
          </div>
    </Container>  

    {/* função em prop */}
    <ExecuteFunction myFunction={showMessage}/>

    {/* state lift */}
    <Message msg={message}/>
    <ChangeMessage handleMessage={handleMessage}/>

    </div>
    </>
  )
}

export default App
