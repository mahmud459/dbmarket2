import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './featured.css'
import App from './App.jsx'
import './TopPerformance.css'
import './articles.css'
import './Footer.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
