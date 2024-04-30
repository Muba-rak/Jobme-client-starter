import React, { useState } from "react";

const SearchForm = () => {
  return (
    <div className="searchform d-none d-lg-block  p-3">
      <form className="container d-flex justify-content-between align-items-center">
        <select name="" id="job" className="py-2  px-xl-4 rounded-2 fs-5 ">
          <option value="">Select Job Type</option>
        </select>
        <select name="" id="industry" className="py-2 px-xl-4 rounded-2 fs-5">
          <option value="">Select Industry</option>
        </select>
        <select name="" id="mode" className="py-2 px-xl-4 rounded-2 fs-5">
          <option value="">Select Mode of Work</option>
        </select>
        <select name="" id="location" className="py-2 px-xl-4 rounded-2 fs-5">
          <option value="">Select Location</option>
        </select>
        <button className="btn btn-info text-white py-2 px-xl-4 fs-5">
          Find Jobs
        </button>
      </form>
    </div>
  );
};

export default SearchForm;