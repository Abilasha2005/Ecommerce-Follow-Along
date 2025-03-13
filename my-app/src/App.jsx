import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Component/Login';
import { Signup } from './Component/Signup';
import { Home } from './page/Home';
import Navbar from './Component/Navbar';
import Singlecard from './Component/Singlecard';
import Productform from './Component/Productform';
import SelectAddress from './Component/SelectAddress';

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
        <Route path="/SelectAddress" element={<SelectAddress />} />
      </Routes>
    </>
  );
}

export default App;