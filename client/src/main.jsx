import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { SetupContext } from './contexts/SetupContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SetupContext.Provider value={true}>
      <Router>
        <App />
      </Router>
    </SetupContext.Provider>
  </React.StrictMode>,
)
