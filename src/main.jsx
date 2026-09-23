import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SomProvider } from './contexts/SomContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SomProvider>
      <App />
    </SomProvider>
  </StrictMode>,
)
