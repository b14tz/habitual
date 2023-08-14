import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { SetupContextProvider } from './contexts/SetupContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SetupContextProvider initial={true}>
      <Router>
        <App />
      </Router>
    </SetupContextProvider>
  </React.StrictMode>,
)
