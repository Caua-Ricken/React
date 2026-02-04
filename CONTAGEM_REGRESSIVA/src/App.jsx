import './App.css'
import { useState } from 'react'
import img from './assets/imagem.jpg'

import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='app' style={{backgroundImage: `url(${img})`}}>
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
