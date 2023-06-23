import React from 'react'
import {AiFillHeart} from 'react-icons/ai'
import {BsChatFill} from 'react-icons/bs'
import './offers.css'

const Offers = () => {
  return (
    <div className='offers'>
      <h1>Best tour Package offers for you</h1>
      <p>choose your next destination</p>
      <div className="cards">
          <div className="card">
               <h3>Lotus-Delhi</h3>
               <div className='img-text'>
                    <img src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.bucketlistly.blog%2Fposts%2Fbest-free-travel-images&psig=AOvVaw0HEI1ERjtSqL0fUpGs_mIO&ust=1687587249682000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCJj8gcbe2P8CFQAAAAAdAAAAABAR"/>
                    <h4>inCLUDE adfgh asdf sdfg asdfg sdf sdfgjejdj</h4>
               </div>
               <div className='context-bx'>
                    <div className="price">
                         <div className="heart-chat">
                              <i><AiFillHeart/><span>5432</span></i>
                              <i><BsChatFill/><span>5432</span></i>
                         </div>
                         <div className="info-price">
                              <a href = "">More info</a>
                              <h4>$00.00</h4>
                         </div>
                    </div>
                    <div className="days">
                         5 days <br/> INDIA
                    </div>
                    
               </div>
          </div>
          <div className="card">
               <h3>Lotus-Delhi</h3>
               <div className='img-text'>
                    <img src= "src/assets/image1.jpg"/>
                    <h4>inCLUDE adfgh asdf sdfg asdfg sdf sdfgjejdj</h4>
               </div>
               <div className='context-bx'>
                    <div className="price">
                         <div className="heart-chat">
                              <i><AiFillHeart/><span>5432</span></i>
                              <i><BsChatFill/><span>5432</span></i>
                         </div>
                         <div className="info-price">
                              <a href = "">More info</a>
                              <h4>$00.00</h4>
                         </div>
                    </div>
                    <div className="days">
                         5 days <br/> INDIA
                    </div>
                    
               </div>
          </div>
          <div className="card">
               <h3>Lotus-Delhi</h3>
               <div className='img-text'>
                    <img src= "src/assets/image1.jpg"/>
                    <h4>inCLUDE adfgh asdf sdfg asdfg sdf sdfgjejdj</h4>
               </div>
               <div className='context-bx'>
                    <div className="price">
                         <div className="heart-chat">
                              <i><AiFillHeart/><span>5432</span></i>
                              <i><BsChatFill/><span>5432</span></i>
                         </div>
                         <div className="info-price">
                              <a href = "">More info</a>
                              <h4>$00.00</h4>
                         </div>
                    </div>
                    <div className="days">
                         5 days <br/> INDIA
                    </div>
                    
               </div>
          </div>
          <div className="card">
               <h3>Lotus-Delhi</h3>
               <div className='img-text'>
                    <img src= "src/assets/image1.jpg"/>
                    <h4>inCLUDE adfgh asdf sdfg asdfg sdf sdfgjejdj</h4>
               </div>
               <div className='context-bx'>
                    <div className="price">
                         <div className="heart-chat">
                              <i><AiFillHeart/><span>5432</span></i>
                              <i><BsChatFill/><span>5432</span></i>
                         </div>
                         <div className="info-price">
                              <a href = "">More info</a>
                              <h4>$00.00</h4>
                         </div>
                    </div>
                    <div className="days">
                         5 days <br/> INDIA
                    </div>
                    
               </div>
          </div>
          
      </div>
    </div>
  )
}

export default Offers
