import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from './routes/Contact.jsx'

// 2 - pagina de erro
import ErrorPage from './routes/ErrorPage.jsx'

// 3 - componente base
import Home from './routes/Home.jsx'

// 7 - rota dinamica
import Products from './routes/Products.jsx'

// 8 - rotas aninhadas
import Info from './routes/Info.jsx'


// 1 - configurando o router
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const router = createBrowserRouter([
  // rota fora do children é a rota pai a principal
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    
    // 3 - componente base, configurações de paginas devem ser feitas dentro de 'children', paginas que vamos usar na Outlet
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: 'Contact',
        element: <Contact/>
      },

      // 7 - rota dinamicas, carregando produtos individualmente dentro do nosso home que a aplicação principal do outlet
      {
        path: 'products/:id',
        element: <Products/>
      },

      // 8 - rota aninhada
      {
        path: 'products/:id/info',
        element: <Info/>
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
