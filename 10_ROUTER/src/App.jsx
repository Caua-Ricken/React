import { useState } from 'react'
import './App.css'

// 3 - importando o outlet
import { Outlet } from 'react-router-dom'

// 5 - link entre paginas
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <NavBar/>
        <Outlet/>
        <p>footer</p>
      </div>
    
  )
}

export default App
