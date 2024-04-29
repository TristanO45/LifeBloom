import React from "react";
import Link from "next/link";
import Image from "next/image";

function ContactHeader(props) {
  return (
    <section className="relative">
      <div className="h-[60vh] opacity-80 overflow-hidden">
        <Image
          src="/contactHeader.jpg"
          alt="headerimg"
          width={200}
          height={200}
          style={{ objectFit: "cover", width: "100vw", height: "50vh" }}
          className="w-screen"
          priority={true}
        />
      </div>

      <div className="w-[95%] bg-[#c3c1ab] absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-10 shadow-lg">
        <div className="w-[85%] py-16 mx-auto flex flex-col justify-center items-center text-center text-white space-y-8">
          <div className="w-full flex flex-row justify-center">
            <h1 className="font-licorice tracking-wide text-5xl sm:text-6xl md:text-7xl">
              Request{" "}
              <span className="font-tinos text-3xl sm:text-4xl md:text-5xl">
                an Appointment
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-l tracking-wide">
            To request an appointment or consultation, please complete the
            inquiry form below. We respond to each inquiry within 24-48 hours.
            If you do not see a response, please check your spam folder.
          </p>
          <p className="text-lg sm:text-xl font-bold tracking-wide">
            For general questions and all other inquiries, feel free to email
            keisha@keishalibbrecht.com
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHeader;
