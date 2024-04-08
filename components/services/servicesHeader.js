import React from "react";
import Link from "next/link";
import Image from "next/image";

function ServicesHeader(props) {
  return (
    <section className="relative">
      <div className="w-full h-96 sm:h-[400px] overflow-hidden">
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
        <h1 className="font-licorice text-5xl sm:text-6xl md:text-7xl">
          Services
        </h1>
        <p className=" w-3/4 text-lg sm:text-2xl md:text-3xl">
          BJ - $5, HJ - $3, ZJ - Market Price ;)
        </p>
      </div>
    </section>
  );
}

export default ServicesHeader;
