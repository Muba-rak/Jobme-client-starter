import React, { useState } from "react";
import { Link } from "react-router-dom";
import MyButton from "../components/MyButton";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Login = () => {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div className="loginform d-flex align-items-center justify-content-center vw-100 vh-100">
      <form
        onSubmit={handleLogin}
        className="rounded-4 bg-white p-5 needs-validation"
      >
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
            className="bg-transparent border-0 text-secondary position-absolute top-0 end-0"
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
          {/* <div>
            <p>Forgot Password?</p>
          </div> */}
        </div>
        <MyButton
          content={"Log In"}
          extraClass={"submitbtn mx-auto d-block neededwidth"}
        />

        <div className="mt-3 text-center">
          <p>Or continue with</p>
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
