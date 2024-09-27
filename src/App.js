
import React,{ useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
   
  // for dark mode
  const[mode,setMode] = useState('light'); 
  //for alert
  const[alert,setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(36 41 45)";
      showAlert("Dark Mode is Enabled","success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is Enabled","success");
    }
  };

  return (
    <>
     <Router>
      <Navbar title="myAPP" Link="about" mode = {mode}  toggleMode={toggleMode} />
      <Alert alert = {alert} />
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route> 
           <Route exact path="/" element= {<Textform showAlert={showAlert} heading="Enter something here..." comment="Enter to Convert" mode={mode} />}></Route>
        </ Routes>

      </div>
     </Router>
    </>
  );
}

export default App;
