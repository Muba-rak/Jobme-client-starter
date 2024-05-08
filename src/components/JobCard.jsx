import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";
import MyButton from "./MyButton";

const JobCard = ({
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
    <div className="card mx-auto my-3 py-4 jobcard">
      <div className=" px-4">
        <h2 className="fw-medium fs-5"> {title}</h2>
        <p className="text-secondary fs-5">
          {" "}
          <span>
            <AiOutlineClockCircle className="text-info" />{" "}
          </span>{" "}
          Posted {createdAt}{" "}
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <p className="d-inline-block text-info bg-info-subtle  px-3 text-capitalize rounded-2">
            {mode}{" "}
          </p>
          <p className="text-dark"> $ {salary} </p>
        </div>
      </div>

      <hr className="my-4" />
      <div className="px-4">
        <div className="d-flex gap-3 align-items-start ">
          <div className="joblogo">{logo} </div>
          <div>
            <h2> {company} </h2>
            <p className="text-secondary">
              <span className="me-1">
                <CiLocationOn />{" "}
              </span>{" "}
              {location}{" "}
            </p>
          </div>
        </div>
        <Link to={`/job/${_id}`}>
          <MyButton content={"Apply Now"} />
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
