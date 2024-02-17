import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<Login />} />
  //     <Route path="/Dashboard" element={<Dashboard />} />
  //     <Route path="/Product" element={<Product />} />
  //   </Routes>
  // </BrowserRouter>

  <React.StrictMode>
    <App />
  </React.StrictMode>
)
