import React from 'react'
import {AiFillHeart} from 'react-icons/Ai'
import {BsChatFill} from 'react-icons/Bs'
import "./comps2.css"

const Comps2 = () => {
  return (
    <div className='destination'>
      <div className = "des-bx">
          <h4> our destination</h4>
          <p>choose your next destination</p>
          <li>country </li>
          <li>country </li>
          <li>country </li>
          <li>country </li>
          <li>country </li>
          <h6>Included air ticket, Hotel and many more</h6>
          <button>more info</button>
     </div>
      <div className = "img-bx">
          <img src = "src\assets\image1.jpg" alt =""/>
          <div className="trend-msg">
            <div className="container">
              <h4>INDIA</h4>
              <div className="icon">
                <i><AiFillHeart/><span>5432</span></i>
                <i><BsChatFill/><span>5432</span></i>
              </div>
            </div>
          </div>
          <div className="trend-msg">
            <div className="container">
              <h4>USA</h4>
              <div className="icon">
                <i><AiFillHeart/><span>5432</span></i>
                <i><BsChatFill/><span>5432</span></i>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Comps2
