import React from "react";
import SearchForm from "../SearchForm";

const Hero = () => {
  return (
    <div className="hero-section">
      <div>
        <h1 className="text-white mainfont text-center fw-bold mb-4">
          FIND JOBS AND HIRE AMAZING <br /> TALENTS!
        </h1>
        <SearchForm />
      </div>
    </div>
  );
};

export default Hero;
