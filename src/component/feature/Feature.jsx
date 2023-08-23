import React from 'react'
import './Feature.css'
import { FaCheck } from "react-icons/fa";

const Feature = () => {
  return (
    <div className='feature-main'>
       <div className='icon-style'>
        <i className='icon'>
       <FaCheck size = {130} style={{color: 'white'}}/> 
       </i>
       </div>
    </div>
  )
}

export default Feature