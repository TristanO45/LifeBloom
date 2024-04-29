import React from "react";
import Link from "next/link";
import Image from "next/image";

function ServicesHeader() {
  return (
    <section className="relative">
      <div className="w-full h-72 sm:h-[30vh] overflow-hidden">
        <Image
          src="/crisisHeader.jpg"
          alt="headerimg2"
          fill={true}
          style={{ objectFit: "cover" }}
          priority={true}
        />
      </div>
      <div className="absolute flex items-center justify-center inset-0 z-10 ">
        <h1 className="font-tinos text-5xl sm:text-6xl md:text-7xl tracking-wide text-white">
          Services
        </h1>
      </div>
    </section>
  );
}

export default ServicesHeader;
