import React from "react";
import SearchForm from "../SearchForm";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div>
        <h1 className="text-white mainfont text-center fw-bold mb-4">
          FIND JOBS AND HIRE AMAZING <br /> TALENTS!
        </h1>
        <SearchForm />
        <div className="text-center d-lg-none">
          <Link to="/jobs">
            <button className="btn btn-info px-4 py-2 rounded-3 fs-4 text-white">
              Find More Jobs
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
