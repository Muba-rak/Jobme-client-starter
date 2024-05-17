import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Headeer() {
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
          <Nav className="ms-auto d-lg-flex gap-4">
            <Link to="/" className="fs-5 text-dark">
              Home
            </Link>
            <Link to="/jobs" className="fs-5 text-dark">
              Job Listings
            </Link>
            <Link to="/contact" className="fs-5 text-dark">
              Contact Us
            </Link>
          </Nav>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Headeer;
