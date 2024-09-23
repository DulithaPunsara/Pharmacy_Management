// src/theme/Sidebar.js
import React from "react";
import { FaTachometerAlt , FaFileInvoice, FaBox , FaClipboardList, FaCapsules ,FaUserTie ,FaCog ,FaReceipt      } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/login/dashboard">
            <FaTachometerAlt  className="icon" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/login/addbill">
            <FaReceipt className="icon" />
            <span>Add Bill</span>
          </Link>
        </li>
        <li>
          <Link to="/login/b_history">
            <FaFileInvoice    className="icon" />
            <span>Bill History</span>
          </Link>
        </li>
{/*}

        <li>
          <Link to="/">
            <FaBox  className="icon" />
            <span>Orders</span>
          </Link>
        </li>

        */}
        <li>
          <Link to="/">
            <FaClipboardList className="icon" />
            <span>Order History</span>
          </Link>
        </li>
        <li>
          <Link to="/login/medicine-stock">
            <FaCapsules className="icon" />
            <span>Medicine Stock</span>
          </Link>
        </li>
        <li>
          <Link to="/login/Staff">
            <FaUserTie className="icon" />
            <span>Staff</span>
          </Link>
        </li>{/*
        <li>
          <Link to="/login/seting">
            <FaCog   className="icon" />
            <span>Seting</span>
          </Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
