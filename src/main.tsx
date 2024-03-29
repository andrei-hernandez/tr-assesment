import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './styles/globals.sass'
import { BrowserRouter } from 'react-router-dom'
import { CardProvider } from './context/cardContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>    
      <BrowserRouter>
        <CardProvider>
          <App />
        </CardProvider>
      </BrowserRouter>    
  </React.StrictMode>,
)
