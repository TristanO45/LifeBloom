import React from "react";
import Navbar from "../../components/main/Navbar";
import Header from "../../components/main/Header";
import Mission from "../../components/main/Mission";
import AboutMe from "../../components/main/AboutMe";
import RelatedContent from "../../components/main/RelatedContent";
import Footer from "../../components/main/Footer";

function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      <div>
        <Header id="header" />
        <Mission id="mission" />
        <AboutMe id="aboutMe" />
        <RelatedContent id="relatedContent" />
        <Footer id="footer" />
        {children}
      </div>
    </div>
  );
}

export default Layout;
