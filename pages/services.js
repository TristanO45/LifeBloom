import React from "react";
import Navbar from "../components/main/Navbar";
import ServicesHeader from "../components/services/servicesHeader";
import ServicesInfo from "../components/services/servicesInfo";
import Footer from "../components/main/Footer";

function Services() {
  return (
    <>
      <Navbar />
      <div id="services">
        <ServicesHeader />
        <ServicesInfo />
      </div>
      <Footer />
    </>
  );
}

export default Services;
