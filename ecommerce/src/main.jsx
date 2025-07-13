import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShoContextProvider from './Context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <ShoContextProvider>
    <App />
  </ShoContextProvider>
)
