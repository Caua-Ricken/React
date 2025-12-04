import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './routes/Contact.jsx'

// 2 - pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'

// 3 - componente base
import Home from './routes/Home.jsx'

// 1 - configurando o router
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    
    // 3 - componente base, configurações de paginas devem ser feitas dentro de 'children'
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'Contact',
        element: <Contact/>
      }
    ]
  },
  /*
  {
    path: 'Contact',
    element: <Contact/>,
  }*/
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
