
import './App.css';
import React from 'react'; 
import Navbar from "./components/Navigation/Navbar.js"
import AboutMe from "./components/Project/AboutMe.js"
import ProjCard from "./components/ProjCard/index.js"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import Projects from './pages/Projects';


function App() {
  return (

    <div className="App">
      < Navbar />
      <AboutMe />
      <ProjCard />
    </div>
  );
}

export default App;
