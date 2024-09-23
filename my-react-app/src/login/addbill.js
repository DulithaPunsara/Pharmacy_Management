import React from "react";
import Sidebar from "./theam/Sidebar";
import Header from "./theam/Header";
import Home from "./addbill/addbill";

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