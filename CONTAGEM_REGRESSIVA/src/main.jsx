import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CountdownContextProvider } from './context/CountdownContext.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// pages
import Home from './routes/Home.jsx'
import Countown from './routes/Countown.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children:[
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/countown',
        element: <Countown />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountdownContextProvider>
    <RouterProvider router={router} />
    </CountdownContextProvider>
  </StrictMode>,
)
