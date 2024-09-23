import React from "react";
import Header from "./theam/Navbar";
import Footer from "./theam/Footer";
import Home from "./about/about";


const Layout = () => {
    return (
      <div>
        <Header />
        <Home />
        <Footer />
      </div>
    );
  };
  
  export default Layout;