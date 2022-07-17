import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login'
import Header from './components/Header';
import Register from './components/Register';
import CalcForm from './components/CalcForm';
import Results from './components/Results';

function App() {


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calc" element={<CalcForm />} />
        <Route path="/results" element={<Results />} />
      </Routes>

    </BrowserRouter>
  );


}

export default App;
