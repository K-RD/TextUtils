import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';


function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode= ()=>{
    if (mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor='#0b385f';
      showAlert("Dark mode has been enabled","success");
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
    <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter your text below to analyze it" mode={mode}  />
    </div>
    {/* <About/> */}

    </>
  );
}

export default App;
