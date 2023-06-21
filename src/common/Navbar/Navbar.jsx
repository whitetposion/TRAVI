import React, { useState } from 'react'
import "./Navbar.css"
import {SiYourtraveldottv} from 'react-icons/si'
import {FaBars} from 'react-icons/fa'
import { Navbarlinks } from './../../data'
import {Link} from 'react-router-dom'
const Navbar = () => {
  const [comm, useComm] = useState(false);
  const handleClick = ()=> {
    useComm(!comm);
  }
  return (
    
      <div className= "container ">
          <h1 className= "logo">
              <i className = "logo-img">
                <SiYourtraveldottv/>
              </i>
              Travi
          </h1>
          <div className= " menu-icons" onClick={handleClick}>
            <i>{comm? <FaBars/>: null}</i>
          </div>
          <div className= {comm ? "nav-items active": "nav-items" }>
            {Navbarlinks.map((item,index) =>{
              return (
                <li key={index}>
                  <Link to = {item.url} className={item.cName}>{item.title}</Link>
                </li>
              )
            })}

          </div>
          
      </div>
    
  )
}

export default Navbar
