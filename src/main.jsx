import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import AppRoutes from "./index"


createRoot(document.getElementById('root')).render(
  <StrictMode>
  
  <AppRoutes />
    
  </StrictMode>,
)
