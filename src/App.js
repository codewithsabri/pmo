
import './App.css';
import React, { useState } from 'react'
import Navigation from './Navigation'
import { Routes, Route } from "react-router-dom";
// import MyProgress from './Component/MyProgress';
import Home from './Component/Home';
import Login from './Component/Login';
import Register from './Component/Register';
import ChartProgress from './Component/ChartProgress';
import Stories from './Component/Stories';
import Ressources from './Component/Ressources';
// import Stopwatch from './Component/Stopwatch';
import SucessStories from './Component/SucessStories';
import Myprofile from './Component/Myprofile';
import { createContext, useContext } from 'react';

export const userContext = createContext()

function App() {

  const [authenticated, setAuthenticated] = useState(false);
  return (
    <div className="App">

      <userContext.Provider value={[authenticated, setAuthenticated]}>
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
        </Routes>
      </userContext.Provider>


    </div>
  );
}

export default App
