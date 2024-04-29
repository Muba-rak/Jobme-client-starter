import React from "react";
import "../css/home.css";
import {
  Hero,
  SectionOne,
  HowItWorks,
  UploadCv,
  Testimonials,
} from "../components/HomeComponents";

const Home = () => {
  return (
    <div>
      <Hero />
      <SectionOne />
      <HowItWorks />
      <UploadCv />
      <Testimonials />
    </div>
  );
};

export default Home;
