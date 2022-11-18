import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Login from "./Components/Login/login";
import About from "./Components/About/about";
import Home from "./Components/Home/home";
import Contact from "./Components/Contact/contact";
import Jobs from "./Components/Jobs/jobs";
import NavBar from "./Components/NavBar/navbar"
function App() {

  return (
    <Router>

      <NavBar />
      <br></br>
      <div className="pages">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/jobs" element={<Jobs />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
