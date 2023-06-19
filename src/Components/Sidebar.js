import React, { useState } from "react";
import "./Sidebar.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`container2 ${showSidebar ? "show-sidebar" : ""}`}>
        <div className="profile">
          <div className="doc-info">
            <h3>Inventory Manager</h3>
          </div>
        </div>
        <div className="buttons">
          <div className="db-btn">
            <button>
              <Link to="/" className="up-btn">Home</Link></button>
          </div>
          <div className="db-btn">
            <button> <Link to="https://baseapm.onrender.com/" className="up-btn">Logout</Link></button>
          </div>
        </div>
        <div className="inventory-manager">
          <button>
            <BsFillPersonFill className="route-btn" size={22} style={{ color: "black" }} />
            <Link to="/" className="heading">
              <h3>Inventory Manager</h3>
            </Link>
          </button>
        </div>
        <div className="inventory-manager">
          <button>
            <AiOutlineShoppingCart className="route-btn" size={22} style={{ color: "black" }} />
            <Link to="/orderqueue" className="heading">
              <h3>Order Queue</h3>
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
