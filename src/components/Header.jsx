import React, { useState } from "react";
import "../css/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header>
      <nav className="navbar container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div
          className="hamburger text-info fs-4"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <IoMdClose /> : <GiHamburgerMenu />}
        </div>
        <div className={`links mt-3 mt-md-0 ${showMenu ? "show" : ""}`}>
          <ul className="d-flex justify-content-between align-items-center flex-column flex-lg-row gap-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Job Listings</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={`buttons ${showMenu ? "show" : ""}`}>
          <button className="btn btn-info text-white px-3 rounded-3 fs-4 ">
            Post Jobs
          </button>
          <button className="btn border-0 text-dark">
            <Link to="/login">Log In</Link>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
