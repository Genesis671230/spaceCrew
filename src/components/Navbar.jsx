import React from "react";
import "./Navbar.css";
import logo from "../assets/shared/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>

      <div className="rightLinks">
        
        <Link className="link" to="/">
          <div>00 HOME</div>
        </Link>

        <Link className="link" to="/destination">
          <div>01 DESTINATION</div>
        </Link>

        <Link className="link" to="/crew">
          <div>02 CREW</div>
        </Link>

        <Link className="link" to="/technology">
          <div>03 Technology</div>
        </Link>
      
      </div>
    </div>
  );
};

export default Navbar;
