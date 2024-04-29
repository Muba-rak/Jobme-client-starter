import React from "react";
import { RelatedJobs } from "../components";
import {
  Map,
  JobDescription,
  JobInfo,
} from "../components/JobDetailsComponent";

const JobDetails = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row gap-5">
          <div className="col-lg-5">
            <div>
              <JobInfo />
            </div>
            <div className="mt-4 d-none d-md-block">
              <Map />
            </div>
          </div>
          <div className="col-lg-6 mt-3 mt-md-0">
            <JobDescription />
          </div>
        </div>
      </div>
      <RelatedJobs />
    </div>
  );
};

export default JobDetails;
