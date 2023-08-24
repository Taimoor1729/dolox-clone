import React, { useState, useEffect } from 'react'
import { TypeAnimation } from 'react-type-animation';
import './single.css'
import { FaTwitter, FaFacebook, FaGithub, FaGoogle, FaBlog } from 'react-icons/fa';


const Single = () => {
    const [animationFinished, setAnimationFinished] = useState(false);
    const [currentColor, setCurrentColor] = useState('black'); // Set your initial color here

  const handleTyping = (text) => {
    console.log("text", text);
    // Update the color based on the current text being typed
    if (text === 'HELLO!') {
      setCurrentColor('blue');
    } else if (text.includes('Hamsters')) {
      setCurrentColor('green');
    } else if (text.includes('Guinea Pigs')) {
      setCurrentColor('orange');
    } else if (text.includes('Chinchillas')) {
      setCurrentColor('red');
    } else {
      setCurrentColor('black');
    }
  };

    useEffect(() => {
      // The animation has finished after a duration of your choice
      const animationDuration = 9500; // Adjust this to your animation's duration
      const timer = setTimeout(() => {
        setAnimationFinished(true);
      }, animationDuration);
  
      return () => clearTimeout(timer); // Clean up on unmount
    }, []);
  return (
    <div className='main' style={{ backgroundColor: 'crimson' }}>
    <a className='laptop-camera' href='#contact'></a>
    <div className='laptop-screen' >
    {animationFinished ? (
        <div className="scroll-down-message" style={{fontSize: '2.5em', color: 'white'}}>Scroll Down</div>
      ) : (
        <TypeAnimation
          sequence={[
            'HELLO!',
            1000,
            'We produce food for Hamsters',
            1000,
            'We produce food for Guinea Pigs',
            1000,
            'We produce food for Chinchillas',
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: '2em', display: 'block' , color: 'white'}}
          onComplete={() => setAnimationFinished(true)}
          onTyping={() => handleTyping()}
        />
      )}
    </div>
    <div className='laptop'>
    {/* <img src="https://dolox.com/img/laptop.png" alt="react image" /> */}
    </div>
    <nav className='laptop-social'>
    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={40} style={{'color': 'black' }}/> {/* Adjust the size as needed */}
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={40} style={{'color': 'black' }}/> {/* Adjust the size as needed */}
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaGithub size={40} style={{'color': 'black' }}/> {/* Adjust the size as needed */}
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaGoogle size={40} style={{'color': 'black' }}/> {/* Adjust the size as needed */}
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaBlog size={40} style={{'color': 'black' }}/> {/* Adjust the size as needed */}
      </a>
    </nav>
    </div>
  )
}

export default Single