import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode,setMode]=useState('light');

  const toggleMode= ()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='#0b385f';
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }

  return (
    <>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
    <div className="container my-3">
      <TextForm heading="Enter your text below to analyze it" mode={mode}  />
    </div>
    {/* <About/> */}

    </>
  );
}

export default App;
