import logo from './logo.svg';
import './App.css';
import Single from './component/home/Single';
import Background from './component/home/Background';
import Process from './component/process/Process';
import Feature from './component/feature/Feature';

function App() {
  return (
    <div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Background /> */}
      <Single/>
      <Process/>
      <Feature/>
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from 'react';
// import './App.css'; // You can define your own CSS styles

// function App() {
//   const [names, setNames] = useState(['spark', 'John', 'Alice', 'Bob']); // Add more names here
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [showScrollDown, setShowScrollDown] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => {
//         if (prevIndex < names.length - 1) {
//           return prevIndex + 1;
//         } else {
//           setShowScrollDown(true);
//           clearInterval(interval);
//           return prevIndex;
//         }
//       });
//     }, 1000); // Interval duration in milliseconds

//     return () => {
//       clearInterval(interval);
//     };
//   }, [names]);

//   return (
//     <div className="App">
//       {names.map((name, index) => (
//         <p
//           key={index}
//           className="sliide"
//           style={{
//             color: 'black',
//             marginLeft: index === currentIndex ? '-465px' : '0',
//             opacity: index <= currentIndex ? 1 : 0,
//           }}
//         >
//           {name}
//         </p>
//       ))}
//       {showScrollDown && <p>Scroll down</p>}
//     </div>
//   );
// }

// export default App;


