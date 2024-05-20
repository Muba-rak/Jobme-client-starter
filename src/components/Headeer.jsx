import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoPersonSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

function Header() {
  const [show, setShow] = useState(true);
  const handleLogout = () => {
    setShow(false);
  };
  return (
    <Navbar expand="lg" className="bg-white header py-3">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            {" "}
            <img src={logo} alt="brand Logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-lg-flex gap-2 gap-lg-5 links">
            {show ? (
              <Link to="/appliedjobs" className="fs-5 ">
                Applied Jobs
              </Link>
            ) : (
              <Link to="/" className="fs-5 ">
                Home
              </Link>
            )}
            <Link to="/jobs" className="fs-5 ">
              Job Listings
            </Link>
            <Link to="/contact" className="fs-5 ">
              Contact Us
            </Link>
          </Nav>
          {show ? (
            <Nav className="logout ms-lg-auto d-flex flex-row gap-3 border border-1 border-dark rounded-pill py-3 justify-content-center align-items-center">
              <Link to="/appliedjobs">
                <IoPersonSharp className="fs-4" />
              </Link>
              <span> | </span>
              <button
                className="bg-transparent border-0"
                onClick={handleLogout}
              >
                <IoIosLogOut className="text-danger fs-4" />
              </button>
            </Nav>
          ) : (
            <Nav className="ms-auto d-lg-flex gap-3">
              <Button className="btn rounded-3 btn-info text-white">
                <Link
                  to="/login"
                  className=" fs-5 text-white text-decoration-none"
                >
                  Log in
                </Link>
              </Button>
              <Button className="btn bg-transparent border-0">
                <Link
                  to="/register"
                  className="fs-5 text-dark text-decoration-none"
                >
                  Sign up
                </Link>
              </Button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
