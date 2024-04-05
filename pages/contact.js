import React from "react";
import Navbar from "../components/main/Navbar";
import ContactHeader from "../components/contact/contactHeader";
import ContactForm from "../components/contact/contactForm";
import Footer from "../components/main/Footer";

function Contact() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-between ">
        <ContactHeader />
        <ContactForm id="contact" />
      </div>
      <Footer />
    </>
  );
}

export default Contact;
