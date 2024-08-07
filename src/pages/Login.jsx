import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/MyButton";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import logo from "../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginschema } from "../utils/formValidator";

const Login = () => {
  const [show, setShow] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  };

  return (
    <div className="loginform d-flex align-items-center justify-content-center vw-100 vh-100">
      <form
        onSubmit={handleLogin}
        className="rounded-4 bg-white p-5 needs-validation"
      >
        <Link to="/" className="d-block  my-2 text-center">
          <img src={logo} alt="" style={{ width: "90px" }} />
        </Link>
        <h2 className="text-center fs-4">Welcome Back!</h2>
        <p className="text-center fs-3 mb-3">Log In to hit your dream job!</p>

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
            style={{ top: "10%" }}
            className="bg-transparent border-0 text-secondary position-absolute end-0"
          >
            {" "}
            {show ? <FaRegEyeSlash /> : <FaRegEye />}{" "}
          </button>
        </div>

        <div className="d-flex justify-content-between align-items-center mx-auto my-3 check neededwidth">
          <div className="d-flex justify-content-center align-items-center gap-2">
            <input type="checkbox" className="form-check-input shadow-none" />
            <span className="pt-2">Remember Me</span>
          </div>
        </div>
        <MyButton
          content={isSubmitting ? `Logging In.....` : "Log In"}
          extraClass={"submitbtn mx-auto d-block neededwidth"}
        />

        <div className="mt-3 text-center">
          <p>
            Don't have an account?{" "}
            <Link
              to="/register"
              className="btn-link text-info text-decoration-none ms-2"
            >
              Sign Up
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
