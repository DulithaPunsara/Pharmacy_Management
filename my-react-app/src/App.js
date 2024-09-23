import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Stock from "./login/stock";
import Home from "./login/home";
import Login from "./login/login";
import Staff from "./login/staff";
import Seting from "./login/seting";
import Addbill from "./login/addbill";
import Bhistory from "./login/b_history";
import Medicine from "./home/medicine";
import Mhome from "./home/home";
import About from "./home/about";
import Contact from "./home/contact";
import Oder from "./home/oder";

import "./App.css";
 


function App() {
  return (
    <Router>
      <div className="App">

        <div className="content">
          <Routes>
            <Route path="/" element={<Mhome />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/order" element={<Oder />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login/dashboard" element={<Home />} />
            <Route path="/login/medicine-stock" element={<Stock />} />
            <Route path="/login/staff" element={<Staff />} />
            <Route path="/login/seting" element={<Seting />} />
            <Route path="/login/addbill" element={<Addbill />} />
            <Route path="/login/b_history" element={<Bhistory />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
