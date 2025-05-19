import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
        <div className="landing-container">
      <div className="overlay"></div>
      <div className="content">
        <h1>Welcome to Our Platform</h1>
        <div className="buttons">
       
             <a href="/login">
            <button className="btn btn-light">Login</button>
            </a>
             <a href="/register">
            
              <button className="btn btn-light">Sign Up</button>
            </a>
              
         
        </div>
      </div>
    </div>

</>
    
  )
   
  
}

export default Hero
