import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
          <h2>Subscribe & <br/> get special discount</ h2>
          <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime accusantium nobis repellendus? Voluptatibus, </p>
          <div className="input">
               <input type='email' placeholder='Enter your email address'/>
               <button>Subscribe</button>
          </div>
          <ul>
               <li> 23 <br/> <h6>years serving the travel industry </h6></li>
               <li> 50 <br/> <h6> Global <br/> partnership </h6></li>
               <li> 10 <br/> <h6>Industry Awards since 2022 </h6></li>
               <li> 23 <br/> <h6> subscribe </h6></li>
          </ul>
      </div>
    </>
  )
}

export default Footer
