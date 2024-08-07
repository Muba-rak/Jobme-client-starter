import React, { useState } from "react";
import Layout from "../components/Layout";
import { jobs } from "../data/jobs";
import UpdateStatusModal from "../components/UpdateStatusModal";
import Paginate from "../components/Paginate";
import Loader from "../components/Loader";

const AppliedJobs = () => {
  const [showModal, setShowModal] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const setBg = (status) => {
    if (status.includes("not")) {
      return "bg-danger";
    } else {
      return "bg-success";
    }
  };

  const handleIdUpdate = (id) => {
    setShowModal(true);
    setUpdateId(id);
  };
  return (
    <div>
      <Layout>
        <UpdateStatusModal
          showModal={showModal}
          setShowModal={setShowModal}
          id={updateId}
        />
        <section className="container">
          <h1 className="d-inline-block px-4 py-3 border border-2 border-info rounded-4 mt-2">
            My Job Applications
          </h1>
          <p className="fs-5 fw-bold my-3 mb-4">
            View and manage your job status
          </p>
          <div>
            {jobs.map((job) => {
              const {
                jobTitle,
                companyName,
                location,
                dateApplied,
                status,
                _id,
              } = job;
              return (
                <div
                  key={_id}
                  className=" border border-black border-start-0 border-end-0 border-top-1 border-bottom-2 py-2 my-3 mx-auto d-md-flex justify-content-between align-items-center"
                >
                  <div className="col-md-6">
                    <h3> {jobTitle} </h3>
                    <p className="fs-5 my-1">{companyName} </p>
                    <p className="fs-5 my-1"> {location} </p>
                    <p className="fs-5 my-1">
                      <span className="fw-bold">Date of Application: </span>
                      {dateApplied}{" "}
                    </p>
                  </div>
                  <div className="d-flex mt-3 mt-md-0 gap-2 justify-content-md-end align-items-center col-md-6">
                    <p>
                      <button
                        onClick={() => handleIdUpdate(_id)}
                        className="btn border border-1 border-tertiary rounded-4 bg-transparent text-info fs-5 px-3"
                      >
                        Update Status
                      </button>
                    </p>

                    <p
                      style={{
                        width: "144px",
                        fontSize: "18px",
                        cursor: "auto",
                      }}
                      className={`${setBg(
                        status
                      )} btn border border-1 border-tertiary rounded-4 text-white px-3 text-capitalize`}
                    >
                      {status}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <div className="container">
          <Paginate
            currentPage={1}
            // setCurrentPage={setCurrentPage}
            numOfPages={3}
          />
        </div>
      </Layout>
    </div>
  );
};

export default AppliedJobs;
