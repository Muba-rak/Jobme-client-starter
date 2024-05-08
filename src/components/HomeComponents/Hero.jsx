import React from "react";
import SearchForm from "../SearchForm";
import { Link } from "react-router-dom";
import MyButton from "../MyButton";

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
            <MyButton content={"Find More Jobs"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
