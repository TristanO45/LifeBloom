import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header(props) {
  return (
    <section className="relative  ">
      <div className="w-full overflow-hidden">
        <Image
          src="/HeaderImg1.jpg"
          alt="headerimg"
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div
        className="absolute inset-0 flex justify-center items-center text-center text-white z-10"
        style={{ width: "100%" }}
      >
        <h1 className="absolute text-4xl sm:text-5xl md:text-6xl">
          Nurturing Growth, Healing Hearts
        </h1>
        <p className="mt-32 text-lg sm:text-2xl md:text-3xl">
          Therapy Services in LA and Online in CA
        </p>
      </div>
    </section>
  );
}

export default Header;
