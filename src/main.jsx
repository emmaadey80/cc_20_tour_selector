import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './style.css' // Import the main App component

createRoot(document.getElementById('root')).render( // Render the main component
  <StrictMode>
    <App />
  </StrictMode>,
)
