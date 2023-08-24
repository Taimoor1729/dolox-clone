import React from 'react'
import './about.css'
import { FaHome } from "react-icons/fa";

const About = () => {
  return (
    <div className='main-about'>
      {/* <div className='about-icon'>
      <i className='about-icon-home'>
        <FaHome size = {130} style={{color: 'white'}}/>
      </i>
      </div> */}
       <div className='about-icon-style'  data-aos="zoom-in" data-aos-duration="1000">
        <i className='about-icon'>
       <FaHome size = {130} style={{color: 'white'}}/> 
       </i>
       </div>

       <div className='about-wrap'>
        <h1 className='about-main-heading'>
        About Us
        </h1>
        <h2 className='about-heading'>
        A brief introduction of Dolox, Inc.
        </h2>
        <div className='point'></div>

       </div>
    </div>
  )
}

export default About