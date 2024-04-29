import React from "react";
import { FaGoogle } from "react-icons/fa";
import { BiDollar } from "react-icons/bi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { BsFillPersonPlusFill } from "react-icons/bs";

const JobInfo = () => {
  return (
    <div className="bg-info-subtle p-4 text-start rounded-4">
      <div className="joblogo">
        <FaGoogle />
      </div>
      <h2 className="fs-3 text-dark mt-2">Digital Marketer</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur. Et ultrices tellus convallis
        quam. Sed opi commodo proin gravida magnis pretium senectus aliquet.
      </p>
      <div className="mt-3 ">
        <h2 className="fs-5">Job Information</h2>
        <div
          className="bg-white shadow-lg rounded-4 p-3 d-flex flex-column gap-1 card"
          style={{ maxWidth: "280px" }}
        >
          <p className="d-flex gap-2 align-items-center">
            <span>
              <BsFillPersonPlusFill />
            </span>
            <span className="text-dark fw-semibold">Employment Type :</span>
            <span className="text-info"> Full Time</span>
          </p>
          <p className="d-flex gap-2 align-items-center">
            <span>
              <CiLocationOn />
            </span>
            <span className="text-dark fw-semibold">Location :</span>
            <span className="text-info">United Kingdom</span>
          </p>
          <p className="d-flex gap-2 align-items-center">
            <span>
              <AiOutlineClockCircle />
            </span>
            <span className="text-dark fw-semibold">Date Posted:</span>
            <span className="text-info">13th April, 2024.</span>
          </p>
          <p className="d-flex gap-2 align-items-center">
            <span>
              <PiSuitcaseSimpleThin />
            </span>
            <span className="text-dark fw-semibold">Experience:</span>
            <span className="text-info">5+ Years</span>
          </p>
          <p className="d-flex gap-2 align-items-center">
            <span>
              <BiDollar />
            </span>
            <span className="text-dark fw-semibold">Salary:</span>
            <span className="text-info">30 -35k per annum</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
