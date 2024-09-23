import React from "react";
import Sidebar from "./theam/Sidebar";
import Header from "./theam/Header";
import Home from "./b_histry/bhistory";

const Layout = () => {
    return (
      <div>
        <Header />
        <Sidebar />
        <Home />
      </div>
    );
  };
  
  export default Layout;