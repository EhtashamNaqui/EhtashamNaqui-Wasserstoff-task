import React from "react";
import "./NavBar.css";
import { Logo, Profile, Settings } from "../../assets";
import SearchBar from "./SearchBar";

const NavBar = () => {
  
  return <nav>
    <img src={Logo} className="Logo" ></img>
    <div className="name">      
      <span className="Logotext">WASSERSTOFF</span>
    </div>
    <div className="navlist">
      <SearchBar/>
    <ul>

      <li>
        <a href="#">Statistics</a>
      </li>

      <li>
        <a href="#">Overview</a>
      </li>

      <li>
        <a href="#">Dashboard</a>
      </li>

      <li>
        <a href="#">Analytics</a>
      </li>
    
    </ul>
    </div>
    <img src={Profile} className="profile" ></img>
    <img src={Settings} className="settings" ></img>
  </nav>;
  
};

export default NavBar;