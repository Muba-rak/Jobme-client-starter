import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobDescription = () => {
  return (
    <div>
      {/* <FaCheckCircle className="text-info" /> */}
      <div>
        <h1>Job Description:</h1>
        <p className="fs-5 mt-3">
          Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque
          magna integer turpis. Tortor ut sollicitudin varius vitae lectus ac
          elementum vel. Viverra pellentesque risus tristique mauris metus.
          Imperdiet purus nulla mi consequat nulla.
        </p>
        <p className="fs-5">
          Lorem ipsum dolor sit amet consectetur. Arcu in amet pellentesque
          magna integer turpis. Tortor ut sollicitudin varius vitae lectus ac
          elementum vel. Viverra pellentesque risus tristique mauris metus.
          Imperdiet purus nulla mi consequat nulla.
        </p>
      </div>
      <div className="my-4">
        <h1>Duties & Responsibilities:</h1>
        {[1, 2, 3, 4, 5, 6].map((p, i) => {
          return (
            <p key={i} className="d-flex gap-2 align-items-center fs-5 my-2">
              <FaCheckCircle className="text-info" />
              Lorem ipsum dolor sit amet consectetur.
            </p>
          );
        })}
      </div>
      <div className="my-4">
        <h1>Skills & Qualifications:</h1>
        {[1, 2, 3, 4, 5, 6].map((p, i) => {
          return (
            <p key={i} className="d-flex gap-2 align-items-center fs-5 my-2">
              <FaCheckCircle className="text-info" />
              Lorem ipsum dolor sit amet consectetur.
            </p>
          );
        })}
        <Link to={`/application/id`}>
          <button className="btn btn-info fs-5 text-white rounded-3 mt-4">
            Apply Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDescription;
