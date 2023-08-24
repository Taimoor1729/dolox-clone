import React from 'react'
import './Feature.css'
import { FaCheck } from "react-icons/fa";
import {ImMobile} from 'react-icons/im';

const Feature = () => {
    
  return (
    // <>
    <div className='feature-main'>
       <div className='icon-style'  data-aos="fade-up" data-aos-duration="1000">
        <i className='icon'>
       <FaCheck size = {130} style={{color: 'white'}}/> 
       </i>
       </div>
       <div className='wrap'>
        <h1 style={{color: 'white'}}>We make building your product easy!</h1>
        <h2 style={{color: ' #a3ccf2'}}>Here is a list of some of the sevices we provide.</h2>

        <section className='first-section' data-aos="fade-right" data-aos-duration="1000">
        <i className='first-icon'>
        <ImMobile size={70} style={{color : 'rgba(255,255,255,.25)'}}/>
        </i>
        <p>
        <div>
            <h1 className='first-heading'>
            Mobile Development
            </h1>
            <p style={{color: 'white'}}>
            We build applications and websites for the Android, iOS and Windows Mobile devices.
            </p>
        </div>
        </p>
        </section>

        <section className='first-section' data-aos="fade-left" data-aos-duration="1000" style={{marginLeft: '604px'}}>
        <i className='first-icon'>
        <ImMobile size={70} style={{color : 'rgba(255,255,255,.25)'}}/>
        </i>
        <p>
        <div>
            <h1 className='first-heading'>
            Mobile Development
            </h1>
            <p style={{color: 'white'}}>
            We build applications and websites for the Android, iOS and Windows Mobile devices.
            </p>
        </div>
        </p>
        </section>

       </div>
    </div>
    // </>
  )
}

export default Feature