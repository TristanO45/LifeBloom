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

      <div className="absolute z-10 flex justify-center items-center bg-[#333a29] -mb-[50%] w-1/2 px-6 sm:px-12 py-1 sm:py-3 top-[50%] left-[25%]">
        <div className="flex flex-col justify-center items-center text-center text-white z-10 space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl">Meet Our Team</h1>
          <p className=" w-3/4 text-lg sm:text-2xl md:text-3xl">
            We're a group of big, bright, strong, long, adept, prosperous,
            excitable, shrinks; eager to figure you out. Don't hesitate, pull
            out your wallets and pay us to tell you why you suck.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactHeader;
