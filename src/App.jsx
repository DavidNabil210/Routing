import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'

import Layout from './components/Layout/Layout'






let x=createBrowserRouter([
  {path:'', element:<Layout/>,children:[
    {index:true,element:<About/>},
    {path:'About',element:<About/>},
    {path:'Contact',element:<Contact/>},
    {path:'Portfolio',element:<Portfolio/>},
  ]},
  
 
])
export default function App() {
  return <>

  <RouterProvider router={x}></RouterProvider>
  </>

}

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
