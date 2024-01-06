import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={Login}></Route>
        <Route path='/home' element={Home}></Route>
        <Route path='/login' element={Login}></Route>
        <Route path='/signup' element={Signup}></Route>
      </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App