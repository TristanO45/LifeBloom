import React from "react";
import Navbar from "./Navbar";
import Header from "../pages/header";
import Mission from "../pages/mission";
import Projects from "../pages/projects";
import Contact from "../pages/contact";

function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="">
        <Header id="home" />
        <Mission id="mission" />
        <Projects id="projects" />
        <Contact id="contact" />
        {children}
      </div>
    </div>
  );
}

export default Layout;
