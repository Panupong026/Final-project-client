import React, {useState, useEffect} from "react";
import { Navbar, Nav, Container, Image } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './Header.css'

const Header = (props) => {
  
  // console.log(props);

  const navigate = useNavigate();

  const handleLogOut = (e) => {
    props.SetLoggedIn(false);
    navigate("/main");
  };

  const handleTable = (e) => {
    navigate("/table");
  };

  const handleTitleClick = () => {
    navigate("/main");
  };
  

  return (
    <div className="header-navbar">
      <a href="#" onClick={handleTitleClick}>
        <h1 className="header-title">JAVA</h1>
      </a>
      {props.loggedIn ? (
        <div className="header-buttons">
          <h3>Welcome</h3>
          <button className="header-logout-btn" onClick={handleTable}>
            Table
          </button>
          <button className="header-logout-btn" onClick={handleLogOut}>
            Log Out
          </button>
        </div>
      ) : (
        <div className="header-buttons">
          <button className="header-signup-btn" onClick={() => navigate("/signup")}>
            Sign up
          </button>
          <button className="header-login-btn" onClick={() => navigate("/login")}>
            Log In
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
