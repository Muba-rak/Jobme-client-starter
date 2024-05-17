import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Headeer from "./Headeer";
const Layout = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <Headeer />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
