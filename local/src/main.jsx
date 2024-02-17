import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Dashboard from './Dashboard'
import Product from './Product'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Product" element={<Product />} />
    </Routes>
  </BrowserRouter>
)
