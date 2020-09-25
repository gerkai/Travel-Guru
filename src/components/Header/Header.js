import React from "react";
import "./Header.css";
import logo from "../Images/logo-1.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="row">
        <nav className="nav ">
          <ul>
            <li>
              <Link to="/home">
                <img className="logo" src={logo} alt="" />
              </Link>
            </li>
            <li>
              <input
                type="text"
                placeholder="Search destination"
                name="search"
              />
            </li>
            <li>
              <Link to="/home">News</Link>
            </li>
            <li>
              <Link to="/home">Destination</Link>
            </li>
            <li>
              <Link to="/home">Blog</Link>
            </li>
            <li>
              <Link to="/home">Contact</Link>
            </li>
            <li>
              <button className="btn-primary">
                <Link to="/login">Login</Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
