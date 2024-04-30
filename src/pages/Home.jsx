import React from "react";
import "../css/home.css";
import {
  Hero,
  SectionOne,
  HowItWorks,
  UploadCv,
  Testimonials,
} from "../components/HomeComponents";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <SectionOne />
        <HowItWorks />
        <UploadCv />
        <Testimonials />
      </Layout>
    </div>
  );
};

export default Home;