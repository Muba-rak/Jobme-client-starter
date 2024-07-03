import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { jobType, mode, industry } from "../data/jobs";

const SearchForm = () => {
  const path = useLocation().pathname;
  const handleSelection = (e) => {
    e.preventDefault();
  };
  return (
    <div className="searchform p-3">
      <form onSubmit={handleSelection} className="container ">
        <div>
          <select
            name=""
            id="job"
            className=" form-select py-2  px-xl-4 rounded-2 fs-5 text-capitalize "
          >
            <option value="">Select Job Type</option>
            {jobType.map((type, i) => {
              return (
                <option key={i} value={type}>
                  {" "}
                  {type}{" "}
                </option>
              );
            })}
          </select>
          <select
            name=""
            id="industry"
            className="form-select py-2 px-xl-4 rounded-2 fs-5 text-capitalize"
          >
            <option value="">Select Industry</option>
            {industry.map((type, i) => {
              return (
                <option key={i} value={type}>
                  {" "}
                  {type}{" "}
                </option>
              );
            })}
          </select>
          <select
            name=""
            id="mode"
            className="form-select py-2 px-xl-4 rounded-2 fs-5 text-capitalize"
          >
            <option value="">Select Mode of Work</option>
            {mode.map((m, i) => {
              return (
                <option key={i} value={m}>
                  {m}
                </option>
              );
            })}
          </select>
          <select
            name=""
            id="location"
            className="form-select py-2 px-xl-4 rounded-2 fs-5"
          >
            <option value="">Select Location</option>
          </select>
          <div className="d-xl-flex align-items-center justify-content-center">
            {path === "/" ? (
              <Link to="/jobs">
                <button className="btn btn-info text-white py-2 px-xl-4 fs-5">
                  Find Jobs
                </button>
              </Link>
            ) : (
              <button className=" mt-2 mt-lg-0 btn btn-info text-white py-2 px-xl-4 fs-5">
                Find Jobs
              </button>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
