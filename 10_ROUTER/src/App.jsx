import { useState } from 'react'
import './App.css'

// 3 - importando o outlet
import { Outlet } from 'react-router-dom'

// 5 - link entre paginas
import NavBar from './components/NavBar'

// 9 - search params
import SearchForm from './components/SearchForm'

function App() {

  return (
      <div>
        <NavBar/>
        <SearchForm/>
        <Outlet/>
        <p>tela principal</p>
        <p>footer</p>
      </div>
    
  )
}

export default App
