import React from "react";
import Navbar from "../components/main/Navbar";
import FaqHeader from "../components/faq/faqHeader";
import FaqPage from "../components/faq/faqPage";
import Footer from "../components/main/Footer";

function Faq() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="resources" className="flex-grow">
        <FaqHeader />
        <FaqPage />
      </div>
      <Footer />
    </div>
  );
}

export default Faq;
