import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import Product from './Product'
import Err from './404'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/*" element={<Err />} />
    </Routes>
  </BrowserRouter>
)
// import React, { Suspense } from 'react'
// import ReactDOM from 'react-dom/client'
// import './index.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   // <BrowserRouter>
//   //   <Routes>
//   //     <Route path="/" element={<Login />} />
//   //     <Route path="/Dashboard" element={<Dashboard />} />
//   //     <Route path="/Product" element={<Product />} />
//   //   </Routes>
//   // </BrowserRouter>

//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
