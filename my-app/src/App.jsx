import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Home from './page/Home';
import Navbar from './Component/Navbar';
import Productform from './Component/Productform';
import Singlecard from './Component/Singlecard';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/productform" element={<Productform />} />
        <Route path="/product/:id" element={<Singlecard />} />
      </Routes>
    </>
  );
}

export default App;