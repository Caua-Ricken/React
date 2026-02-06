import './App.css'
import img from './assets/imagem.jpg'

import { useContext } from 'react'
import { CountdownContext } from './context/CountdownContext'

import { Outlet } from 'react-router-dom'

function App() {

  const {event} = useContext(CountdownContext);

  let eventImage = null;

  if(event){
    eventImage = event.image;
  }

  return (
    <div className='app' style={eventImage ? {backgroundImage: `url(${eventImage})`} : {backgroundImage: `url(${img})`}}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
