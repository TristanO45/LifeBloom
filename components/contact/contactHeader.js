import React from "react";
import Link from "next/link";
import Image from "next/image";

function ContactHeader(props) {
  return (
    <section className="relative">
      <div className="w-full h-[50vh] overflow-hidden">
        <Image
          src="/contactHeader.jpg"
          alt="headerimg"
          style={{ objectFit: "cover" }}
          fill={true}
        />
      </div>

      <div className="absolute w-[95%] sm:w-[65%] sm:h-96 z-10 flex justify-center items-center bg-[#333a29] -mb-[50%]  px-6 sm:px-12 py-8 sm:py-16 top-[45%] sm:top-[60%] left-1/2 transform -translate-x-1/2 shadow-lg">
        <div className="flex flex-col justify-center items-center text-center text-white z-10 space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">Request an Appointment</h1>
          <p className="w-3/4 text-lg sm:text-xl">
          To request an appointment, please complete the inquiry form below. We respond to each inquiry within 24-48 hours. If you do not see a response, please check your spam folder. We will email or call you back with additional information on how to schedule an appointment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHeader;
