import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage';
import Navbar from './common/Navbar/Navbar.jsx';
function App() {
  
  return (
    <>
    
    <Router>
      <p>sdfg</p>
      <Navbar/>
      <Switch>
        <Route path = "/" element = {MainPage}/>
        <Route path="/about" element={AboutPage}/>
      </Switch>
    </Router>
    </>
  )
}

export default App
