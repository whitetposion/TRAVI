import React from 'react';
import {heading, subHeading} from './../../../public/data'
import { AiFillCaretDown} from 'react-icons/ai'
import "./mainimages.css"

const MainImages = () => {
  
  return (
    <>
      <div  className="content" onMouseOver={fetchAPI}>
        <div className='content-box'>
          <h1>{heading}</h1>
          <p>{subHeading}</p>
          <button className = " btn-search">start your journey</button>
        </div>
        <div className="trip-bx">
          <div className = "search-bx">
            <div className="card">
              <h4>Location<i className="drop-down"><AiFillCaretDown/></i></h4>
              <input type='text' placeholder = "paris"/>
            </div>
            <div className="card">
              <h4>Date <i className="drop-down"><AiFillCaretDown/></i></h4>
              <input type="date" />
            </div>
            <div className="card">
              <h4>people </h4>
              <input type = "number" placeholder='how many persons'/>
            </div>
            <input type='button' value ="Explore Now"/>
          </div>
          <div className='travel-bx'>
            <h4>countries to travel</h4>
            <div className='cards'>
              <div className="card">
                <h3>INDIA <img src="" alt=""/></h3>
                <img src="src/assets/image1.jpg" alt=""/>
                <div className="btn-explore">
                  <a href = "">read Now</a>
                  <h5>Mumbai Central <br/> <span>$00.00</span></h5>
                </div>
              </div>
              <div className="card">
                <h3>INDIA <img src="" alt=""/></h3>
                <img src="src/assets/image1.jpg" alt=""/>
                <div className="btn-explore">
                  <a href = "">read Now</a>
                  <h5>Mumbai Central <br/> <span>$00.00</span></h5>
                </div>
              </div>
              <div className="card">
              <h3>INDIA <img src="" alt=""/></h3>
                <img src="src/assets/image1.jpg" alt=""/>
                <div className="btn-explore">
                  <a href = "">read Now</a>
                  <h5>Mumbai Central <br/> <span>$00.00</span></h5>
                </div>
              </div>
              <div className="card">
              <h3>INDIA <img src="" alt=""/></h3>
                <img src="src/assets/image1.jpg" alt=""/>
                <div className="btn-explore">
                  <a href = "">read Now</a>
                  <h5>Mumbai Central <br/> <span>$00.00</span></h5>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
    </>
  )
}

export default MainImages
