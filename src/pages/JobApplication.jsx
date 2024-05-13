import React from "react";
import Layout from "../components/Layout";
import MyButton from "../components/MyButton";

const JobApplication = () => {
  return (
    <div>
      <Layout>
        <div
          className="bg-info-subtle mx-auto rounded-4"
          style={{ maxWidth: "950px" }}
        >
          <form className="p-4">
            <div className="d-flex justify-content-between gap-3 flex-column flex-md-row my-2">
              <div className="w-100">
                <label htmlFor="firstname">*First Name</label>
                <input
                  type="text"
                  id="firstname"
                  className="form-control shadow-none p-3 rounded-4"
                />
              </div>
              <div className="w-100">
                <label htmlFor="lastname">*Last Name</label>
                <input
                  type="text"
                  className="form-control shadow-none p-3 rounded-4"
                />
              </div>
            </div>
            <div className="d-flex justify-content-between gap-3 flex-column flex-md-row my-3">
              <div className="w-100">
                <label htmlFor="email">*Email Address</label>
                <input
                  type="email"
                  className="form-control shadow-none p-3 rounded-4"
                />
              </div>

              <div className="w-100">
                <label htmlFor="phone">*Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control shadow-none p-3 rounded-4"
                />
              </div>
            </div>
            <div className="my-3">
              <label htmlFor="cover">*Cover Letter</label>
              <textarea
                className="w-100 rounded-4 shadow-none form-control"
                cols="30"
                rows="10"
                id="cover"
              ></textarea>
            </div>
            <div className="my-3">
              <label htmlFor="file">*Upload CV/Resume</label>

              <input
                type="file"
                name=""
                id="file"
                className="form-control shadow-none form-field"
              />
              <p className="my-3 text-dark fw-medium fs-6">
                File type should not be larger than 12MB. Supported file types:
                doc. docx. pdf.{" "}
              </p>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                id="agree"
                className="form-check-input shadow-none"
              />
              <label htmlFor="agree" className="form-check-label">
                I agree to the{" "}
                <span className="text-info fw-semibold">
                  Terms & Conditions
                </span>
              </label>
            </div>
            <MyButton content={"Apply Now"} extraClass={"p-2 rounded-4"} />
          </form>
        </div>
      </Layout>
    </div>
  );
};

export default JobApplication;
