// import ReactDom from "react-dom/client"
// import App from "./App"
// import './index.css'
// let projectroot=ReactDOM.createRoot(document.getElementById('root'))

// projectroot.render(<App/>)


import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
