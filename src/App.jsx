import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage';
import Navbar from './common/Navbar/Navbar.jsx';
import ServicePage from './pages/ServicePage';
import PersonPage from './pages/PersonPage';
function App() {
  return (
    <div className = "header">
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" Component = {MainPage}/>
        <Route path="/about" Component={AboutPage}/>
        <Route path ="/service" Component={ServicePage}/>
        <Route path ="/sign-up" Component={PersonPage}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
