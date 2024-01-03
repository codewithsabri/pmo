
import './App.css';
import React, { useState } from 'react'
import Navigation from './Navigation'
import { Routes, Route } from "react-router-dom";
// import MyProgress from './Component/MyProgress';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ChartProgress from './pages/ChartProgress';
import Stories from './pages/Stories';
import Ressources from './pages/Ressources';
// import Stopwatch from './Component/Stopwatch';
import SucessStories from './pages/SucessStories';
import Myprofile from './pages/Myprofile';
import Account from './pages/Account';
import { createContext, useContext } from 'react';
import { AuthProvider } from './context/AuthContext';



function App() {

  return (
    <div className="App">

      <AuthProvider>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/MyProgress" element={<Stopwatch />} /> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/ChartProgress" element={<ChartProgress />} />
          <Route path="/Stories" element={<Stories />} />
          <Route path="/Ressources" element={<Ressources />} />
          <Route path="/SucessStories" element={<SucessStories />} />
          <Route path="/Myprofile" element={<Myprofile />} />
          <Route path="/Account" element={<Account />} />
        </Routes>
      </AuthProvider>


    </div>
  );
}

export default App
