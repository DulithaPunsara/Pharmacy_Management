import React from "react";
import Sidebar from "./theam/Sidebar";
import Header from "./theam/Header";
import Stock from "./stock/Stock";

const Layout = () => {
    return (
      <div>
        <Header />
        <Sidebar />
        <Stock />
      </div>
    );
  };
  
  export default Layout;