import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";

const JobCardLong = ({
  _id,
  title,
  createdAt,
  logo,
  salary,
  company,
  mode,
  location,
}) => {
  return (
    <div className="py-3 px-4  my-3 mx-auto">
      <div className="row justify-content-between align-items-center p-3 rounded-3 longjobcard">
        <div className="col-md-4 col-lg-3 d-flex gap-3 align-items-center">
          <div className="joblogo">{logo} </div>
          <div>
            <h2 className="fw-medium fs-5"> {title}</h2>
            <h2 className="fs-6"> {company} </h2>
          </div>
        </div>

        <div className="col-md-4 col-lg-3">
          <p className="d-inline-block text-info bg-info-subtle  px-3 text-capitalize rounded-2 my-3 my-md-1">
            {mode}{" "}
          </p>
          <p className="text-secondary fs-5">
            {" "}
            <span>
              <AiOutlineClockCircle className="text-info" />{" "}
            </span>{" "}
            Posted {createdAt}{" "}
          </p>
        </div>
        <div className="col-md-2 col-lg-3 d-flex justify-content-start align-items-start flex-md-column gap-2 gap-md-0">
          <p className="text-secondary d-flex align-items-center justify-content-center">
            <span className="pb-1 pe-1">
              <CiLocationOn />{" "}
            </span>{" "}
            {location}{" "}
          </p>
          <p className="text-dark"> $ {salary} </p>
        </div>
        <div className="col-md-2 col-lg-3 d-flex justify-content-md-center align-items-start">
          {" "}
          <Link to={`/job/${_id}`}>
            <button className="btn btn-info fs-5 text-white rounded-3">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCardLong;
