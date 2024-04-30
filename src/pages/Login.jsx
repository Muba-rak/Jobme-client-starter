import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginform d-flex align-items-center justify-content-center vw-100 vh-100">
      <form className="rounded-4 bg-white p-4">
        <h2 className="text-center fs-4">Welcome Back!</h2>
        <p className="text-center fs-3 mb-3">Log In to hit your dream job!</p>

        <input
          type="email"
          placeholder="Email Address"
          className="rounded-4 shadow-none form-control mx-auto my-3 text-secondary border-1 border-secondary p-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="rounded-4 shadow-none form-control  mx-auto my-3 text-secondary border-1 border-secondary p-3"
        />
        <div className="d-flex justify-content-between align-items-center mx-auto my-3 check">
          <div>
            <input type="checkbox" />
            <span>Remember Me</span>
          </div>
          <p>Forgot Password?</p>
        </div>
        <button className="btn btn-info rounded-4 my-3 text-white p-2 fs-5 mx-auto d-block">
          Log In
        </button>

        <div className="mt-3 text-center">
          <p>Or continue with</p>
          <p>
            Don't have an account?{" "}
            <Link
              to="/"
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
