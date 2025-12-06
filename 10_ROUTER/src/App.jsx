import { useState } from 'react'
import './App.css'

// 3 - importando o outlet
import { Outlet } from 'react-router-dom'

// 5 - link entre paginas
import NavBar from './components/NavBar'

function App() {

  return (
      <div>
        <NavBar/>
        <Outlet/>
        <p>tela principal</p>
        <p>footer</p>
      </div>
    
  )
}

export default App
