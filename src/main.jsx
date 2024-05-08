import React from 'react'
import ReactDOM from 'react-dom/client'
//to switch from boxes app to todos app, comment boxes out and uncomment todos
// import App from './boxes/App.jsx'
import App from './todos/App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
