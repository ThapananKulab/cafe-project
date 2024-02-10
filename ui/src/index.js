import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


import Login from './Login.js';
import Dashboard from './Dashboard.js'
import Pos from './Pos.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Pos" element={<Pos />} />
    </Routes>
  </BrowserRouter>
);
