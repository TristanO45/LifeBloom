import React from "react";
import Link from "next/link";
import Image from "next/image";

function Header(props) {
  return (
    <section className="relative">
      <div className="relative w-full h-screen opacity-90 overflow-hidden">
        <Image
          src="/HeaderImg2.jpg"
          alt="headerimg1"
          fill={true}
          style={{
            objectFit: "cover",
            marginTop: "-225px",
            transform: "scale(1.3)",
          }}
          priority={true}
        />
      </div>

      <div
        className="absolute inset-0 pb-20 lg:pb-0 flex flex-col justify-center items-center text-center text-white z-10 space-y-2 sm:space-y-5"
        style={{ width: "100%" }}
      >
        <h1 className="font-tinos text-4xl sm:text-6xl md:text-7xl tracking-normal">
          Nurturing Growth <br />{" "}
          <span className="font-licorice text-5xl sm:text-7xl md:text-8xl">
            Healing Hearts
          </span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl tracking-wide pt-7">
          Therapy Services in LA and Online in CA
        </p>
        <div>
          <a href={"/contact"}>
            <button className="relative overflow-hidden px-6 sm:px-12 py-1 sm:py-3 text-lg sm:text-xl font-medium text-white bg-[#ae887b] border border-[#ae887b] rounded-md shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-[hsl(15,24%,58%)] ease">
                Book a Consultation
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
