import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage';
import Navbar from './common/Navbar/Navbar.jsx';
import ServicePage from './pages/ServicePage';
function App() {
  return (
  
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" Component = {MainPage}/>
        <Route path="/about" Component={AboutPage}/>
        <Route path ="/service" Component={ServicePage}/>
      </Routes>
    </Router>
  
    
  )
}

export default App
