import React from 'react';
import {heading, subHeading} from './../../../public/data'
import "./mainimages.css"

const MainImages = () => {
  
  return (
    <>
      <div className="content">
        <div className='content-box'>
          <h1>{heading}</h1>
          <p>{subHeading}</p>
          <button className = " btn-search">start your journey</button>
        </div>
      </div>
    </>
  )
}

export default MainImages
