import NavBar from './components/NavBar'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
      <div>
        <NavBar />
        <h1>context api</h1>
        <Outlet />
      </div>
    
  )
}

export default App
