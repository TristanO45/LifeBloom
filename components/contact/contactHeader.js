import React from "react";
import Link from "next/link";
import Image from "next/image";

function ContactHeader(props) {
  return (
    <section className="relative">
      <div className="h-[50vh] overflow-hidden">
        <Image
          src="/contactHeader.jpg"
          alt="headerimg"
          width={200}
          height={200}
          style={{ objectFit: "cover", width: "100vw", height: "50vh" }}
          className="w-screen"
        />
      </div>

      <div className="w-[95%] sm:w-[75%] bg-[#333a29] absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 shadow-lg">
        <div className="w-[85%] py-24 mx-auto flex flex-col justify-center items-center text-center text-white space-y-8">
          <h1 className=" text-4xl sm:text-5xl md:text-6xl">Request an Appointment</h1>
          <p className="text-lg sm:text-xl ">
          To request an appointment, please complete the inquiry form below. We respond to each inquiry within 24-48 hours. If you do not see a response, please check your spam folder. We will email or call you back with additional information on how to schedule an appointment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHeader;
