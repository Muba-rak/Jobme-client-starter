import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/MyButton";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";

const Register = () => {
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const [show2, setShow2] = useState(false);
  const toggleShow2 = () => {
    setShow2(!show2);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };
  return (
    <div className="registerform d-flex align-items-center justify-content-center vw-100 vh-100 ">
      <form onSubmit={handleRegister} className="rounded-4 bg-white p-4 p-lg-5">
        <Link to="/" className="d-block mx-auto text-center my-2">
          <img src={logo} alt="" style={{ width: "120px" }} />
        </Link>
        <h2 className="text-center fs-4">Sign Up!</h2>
        <p className="text-center fs-3 mb-3">Register to hit your dream job!</p>
        <input
          type="text"
          placeholder="First Name"
          className=" rounded-4 shadow-none form-control mx-auto my-3 text-dark border-1 border-secondary p-3"
        />
        <input
          type="text"
          placeholder="Last Name"
          className=" rounded-4 shadow-none form-control mx-auto my-3 text-dark border-1 border-secondary p-3"
        />
        <input
          type="email"
          placeholder="Email Address"
          className=" rounded-4 shadow-none form-control mx-auto my-3 text-dark border-1 border-secondary p-3"
        />
        <div className="position-relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="  rounded-4 shadow-none form-control  mx-auto my-3 text-dark border-1 border-secondary p-3"
          />
          <button
            onClick={toggleShow}
            className="bg-transparent border-0 text-secondary position-absolute eye "
          >
            {" "}
            {show ? <FaRegEyeSlash /> : <FaRegEye />}{" "}
          </button>
        </div>
        <div className="position-relative">
          <input
            type={show2 ? "text" : "password"}
            placeholder="Confirm Password"
            className="  rounded-4 shadow-none form-control  mx-auto my-3 text-dark border-1 border-secondary p-3"
          />
          <button
            onClick={toggleShow2}
            className="bg-transparent border-0 text-secondary position-absolute eye"
          >
            {" "}
            {show2 ? <FaRegEyeSlash /> : <FaRegEye />}{" "}
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mx-auto my-3 check">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <input type="checkbox" className="form-check-input shadow-none" />
            <span className="pt-2">Remember Me</span>
          </div>
          {/* <div>
            <p>Forgot Password?</p>
          </div> */}
        </div>
        <MyButton
          content={isSubmitting ? "Signing up....." : "Sign Up"}
          extraClass={"submitbtn mx-auto d-block w-100"}
        />

        <div className="mt-3 text-center">
          <p>Or continue with</p>
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="btn-link text-info text-decoration-none ms-2"
            >
              Log in
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
