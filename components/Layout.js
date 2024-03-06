import React from "react";
import Navbar from "./Navbar";
import Header from "./header";
import Mission from "./mission";
import AboutMe from "./aboutMe";
import RelatedContent from "./relatedContent";
import Footer from "./Footer"

function Layout({ children }) {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="">
        <Header id="header" />
        <Mission id="mission" />
        <AboutMe id="aboutMe" />
        <RelatedContent id="relatedContent" />
        <Footer id="footer"/>
        {children}
      </div>
    </div>
  );
}

export default Layout;
