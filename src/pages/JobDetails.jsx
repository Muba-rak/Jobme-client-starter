import React from "react";
import { RelatedJobs } from "../components";
import {
  Map,
  JobDescription,
  JobInfo,
} from "../components/JobDetailsComponent";
import Layout from "../components/Layout";

const JobDetails = () => {
  return (
    <div>
      <Layout>
        <div className="container mb-5">
          <div className="row gap-5">
            <div className="col-lg-5">
              <div>
                <JobInfo />
              </div>
              <div className="mt-4 d-block">
                <Map />
              </div>
            </div>
            <div className="col-lg-6 mt-3 mt-md-0">
              <JobDescription />
            </div>
          </div>
        </div>
        <RelatedJobs />
      </Layout>
    </div>
  );
};

export default JobDetails;
