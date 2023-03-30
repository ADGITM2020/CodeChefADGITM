import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div style={{ maxWidth: "1500px", margin: "0 auto" }}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
