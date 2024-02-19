import React from "react";
import Navbar from "./Navbar";
import Header from "./header";
import Mission from "./mission"
import Projects from "../pages/projects";
import Contact from "../pages/contact";

function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="">
        <Header id="header" />
        <Mission id="mission" />
        <Projects id="projects" />
        <Contact id="contact" />
        {children}
      </div>
    </div>
  );
}

export default Layout;
