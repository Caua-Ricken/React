import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { CounterContextProvider } from './context/CounterContext.jsx'
import { TitleContextColorProvider } from './context/TitleContextColor.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TitleContextColorProvider>
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
    </TitleContextColorProvider>
  </StrictMode>,
)
