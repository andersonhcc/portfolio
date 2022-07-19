import React from 'react';
import logo from './logo.svg';
import './App.css';
import teste from './images/image1.png';
import Cabeca from './components/cabeca'
import Corpo from './components/corpo1';
import Corpo2 from './components/copo2';
import ParteFinal from './components/partefinal';



function App() {
  return (
    <>
    <body> 
    
    
    <div className="Todo"> 
     
    <Cabeca />
    <Corpo />
    <Corpo2 />
    <ParteFinal/>

    </div>
    


    
    </body>
    
    </>
  );
}

export default App;
