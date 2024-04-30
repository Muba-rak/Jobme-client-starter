import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border border-start-0 border-end-0 border-top-2 border-secondary border-bottom-2 py-5 my-5">
      <div className="container d-lg-flex justify-content-between align-items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <p className="mt-3">
            Find Us On :{" "}
            <span>
              <FaLinkedin />{" "}
            </span>{" "}
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaTwitter />
            </span>
          </p>
        </div>
        <div>
          <ul className="d-md-flex gap-4">
            <Link
              to="/jobs"
              className="text-decoration-none text-dark d-block my-2 my-lg-0"
            >
              <li> Find Jobs </li>
            </Link>
            <Link
              to="/jobs"
              className="text-decoration-none text-dark d-block my-2 my-lg-0"
            >
              <li> Post A job </li>
            </Link>
            <Link
              to="/contact"
              className="text-decoration-none text-dark d-block my-2 my-lg-0"
            >
              <li> Contact Us </li>
            </Link>
            <Link
              to="/jobs"
              className="text-decoration-none text-dark d-block my-2 my-lg-0"
            >
              <li> Find Jobs </li>
            </Link>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;