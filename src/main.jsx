import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/_variables.scss'
import './styles/main.scss'
import App from './app/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
