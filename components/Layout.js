import React from "react";
import Navbar from "./Navbar";
import Header from "../pages/header";
import About from "../pages/about";
import Projects from "../pages/projects";
import Contact from "../pages/contact";

function Layout({ children }) {
  return (
    <div className="bg-[#121212]">
      <Navbar />
      <div className="pt-16">
        <Header id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Contact id="contact" />
        {children}
      </div>
    </div>
  );
}

export default Layout;
