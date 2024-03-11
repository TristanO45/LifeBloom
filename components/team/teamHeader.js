import React from "react";
import Link from "next/link";
import Image from "next/image";

function TeamHeader(props) {
  return (
    <section className="relative">
      <div className="w-full h-screen overflow-hidden">
        <Image
          src="/teamHeader.jpg"
          alt="headerimg"
          className={"image"}
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div
        className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-10 space-y-8"
        style={{ width: "100%" }}
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl">Meet Our Team</h1>
        <p className=" w-3/4 text-lg sm:text-2xl md:text-3xl">
          We're a group of big, bright, strong, long, adept, prosperous,
          excitable, shrinks; eager to figure you out. Don't hesitate, pull out
          your wallets and pay us to tell you why you suck.
        </p>
        <div className="pt-2 sm:pt-8">
          <a href={"/myResume.pdf"} download="Tristan Onfroy Resume">
            <button className="relative overflow-hidden px-6 sm:px-12 py-1 sm:py-3 text-lg sm:text-2xl font-medium text-white bg-[#B1BCA0] border border-[#333a29] rounded-md shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#B1BCA0] ease">
                Free Consultation
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default TeamHeader;
