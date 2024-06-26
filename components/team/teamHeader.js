import React from "react";
import Link from "next/link";
import Image from "next/image";

function TeamHeader(props) {
  return (
    <section className="relative">
      <div className="w-full h-[55vh] overflow-hidden">
        <Image
          src="/teamHeader2.jpg"
          alt="headerimg5"
          fill={true}
          style={{ objectFit: "cover" }}
        />
      </div>
      
      <div className="absolute mx-4 inset-0 flex flex-col justify-center items-center text-center text-white z-10 space-y-3">
        <div className="lg:w-3/4 py-6 bg-[#C3C1AB] bg-opacity-70 flex flex-col justify-center items-center">
        <div className="flex">
          <h1 className="font-licorice mr-4 tracking-wide text-5xl sm:text-6xl md:text-7xl">
            Meet
          </h1>
          <span className="font-tinos text-3xl sm:text-4xl md:text-5xl">
            our Team
          </span>
        </div>
        <p className="w-full sm:w-4/5 md:w-3/4 text-base tracking-wide sm:text-lg md:text-xl lg:text-xl mt-2 sm:mt-4 px-2">
          We believe that each person's path to wellness is unique. Our team
          provides a variety of services based in compassionate, evidence-based,
          and personalized care. We serve individuals and couples of all races,
          religions, sexual orientations, gender identities, origins, and
          ethnicities.
        </p>
        <div className="pt-2 sm:pt-4 md:pt-6 lg:pt-8">
          <Link href="/contact">
            <button className="relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-12 py-1 sm:py-2 md:py-3 text-lg sm:text-xl tracking-wide font-medium text-white bg-[#6a6e59]  rounded-md shadow-inner group">
              <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
              <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
              <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
              <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
              <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#6a6e59] ease">
                Book a Consultation
              </span>
            </button>
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}

export default TeamHeader;
