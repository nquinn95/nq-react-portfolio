
import './App.css';
import React from 'react'; 
import Navbar from "./components/Navigation/Navbar.js"
import AboutMe from "./components/Project/AboutMe.js"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Projects from './pages/Projects';


function App() {
  return (

    <div className="App">
      < Navbar />
      <AboutMe />
    </div>
  );
}

export default App;
