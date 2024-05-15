import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Error404 = () => {
  return (
    <Layout>
      <section className="page container d-flex justify-content-center align-items-center text-center">
        <div>
          <h1 className="text-info display-6">OOOps!</h1>
          <h3 className="my-3">Page Not Found</h3>
          <p>This page doesn't exist, we suggest you go back to home</p>
          <Link
            to="/"
            className="btn btn-info text-decoration-none text-white w-75 my-3"
          >
            Back Home
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Error404;
