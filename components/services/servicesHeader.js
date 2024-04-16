import React from "react";
import Link from "next/link";
import Image from "next/image";

function ServicesHeader() {
  return (
    <section className="relative">
      <div className="w-full h-72 sm:h-[900px] opacity- overflow-hidden">
        <Image
          src="/servicesHeader4.jpg"
          alt="headerimg"
          className=" lg:-mt-32"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="absolute flex items-center justify-center top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
        <h1 className="font-licorice text text-5xl sm:text-7xl md:text-9xl tracking-wide text-white">
          Services
        </h1>
      </div>
    </section>
  );
}

export default ServicesHeader;
