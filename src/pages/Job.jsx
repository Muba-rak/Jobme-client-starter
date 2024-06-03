import React from "react";
import SearchForm from "../components/SearchForm";
import { jobs } from "../data/jobs";
import JobCardLong from "../components/JobCardLong";
import Layout from "../components/Layout";

const Job = () => {
  return (
    <main>
      <Layout>
        <div
          className="top-part"
          style={{
            backgroundImage:
              "linear-gradient(90.26deg, #0DCAF0 5.71%, #0AA0BE 37.45%, #0DC8EE 78.55%, #07748A 98.26%",
            height: "53px",
          }}
        ></div>
        <SearchForm />
        <section className="container py-5">
          <div className="d-flex gap-5 align-items-center container">
            <p className="text-secondary fs-6">
              Showing <span> 10</span> of <span>20</span> results{" "}
            </p>
            <p>
              <button className="btn btn-info text-white">Reset Filters</button>
            </p>
          </div>
          {jobs.map((job) => {
            return <JobCardLong key={job._id} {...job} />;
          })}
        </section>
      </Layout>
    </main>
  );
};

export default Job;
