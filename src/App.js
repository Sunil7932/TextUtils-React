import Alert from './Alert';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes, // Use Routes instead of Switch
//   Route,
//   Link // Keep Link for navigation
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils Dark-Mode';
      // setInterval(() => {
      //   document.title='TextUtils is an amazing site';
      // }, 2000);
      // setInterval(() => {
      //   document.title='Install TextUtils because it is an amazing site';
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils Light-Mode';
    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar title="TextUtils" about="About Me" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />} /> */}
            {/* <Route  exact path="/" element={<TextForms showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />} />
          </Routes> */}
          <TextForms showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
