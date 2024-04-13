import React from "react";
import Navbar from "../components/main/Navbar";
import ResourcesHeader from "../components/resources/resourcesHeader";
import ResourcesCards from "../components/resources/resourcesCards";
import Footer from "../components/main/Footer";

function Resources() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="resources" className="flex-grow">
        <ResourcesHeader />
        <ResourcesCards />
      </div>
      <Footer />
    </div>
  );
}

export default Resources;
