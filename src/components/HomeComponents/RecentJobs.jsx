import React from "react";
import { jobs } from "../../data/jobs";
import JobCard from "../JobCard";
const RecentJobs = () => {
  return (
    <section>
      <div className="d-flex flex-wrap align-items-center justify-content-between">
        {jobs.slice(0, 6).map((job) => {
          return <JobCard key={job._id} {...job} />;
        })}
      </div>
    </section>
  );
};

export default RecentJobs;
