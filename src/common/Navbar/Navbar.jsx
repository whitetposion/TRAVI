import React from 'react'
import "./Navbar.css"
import {SiYourtraveldottv} from 'react-icons/si'
import { Navbarlinks } from '../../../public/data'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className= "container ">
          <h1 className= "logo">
              <i className = "logo-img">
                <SiYourtraveldottv/>
              </i>
              Travi
          </h1>
          
          <div className= "nav-items">
            {Navbarlinks.map((item,index) =>{
              return (
                <li key={index}>
                  <Link to = {item.url} className={item.cName}>{item.title}</Link>
                </li>
              )
            })}
          </div>
      </div>
    </>
  )
}

export default Navbar
