import React from "react";
import Image from "next/image";
import Link from "next/link";

function ServicesInfo(props) {
  return (
    <section className="pt-8 px-6 sm:px-14" id={props.id}>
      <div className="container gap-20 flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="w-full sm:w-1/2 px-6">
          <h1 className="font-tinos text-3xl sm:text-4xl md:text-6xl text-center text-black">
            Individual Therapy
          </h1>
          <div className="w-full h-44 pt-3 bg-[#C3C1AB]">
            <div className="flex flex-row justify-between mx-4  text-black z-10">
              <div className="md:w-1/2">
                <h1 className="font-tinos text-2xl sm:text-3xl md:text-4xl">
                  Specialties
                </h1>
              </div>
              <ul className="md:w-1/2 pt-8 list-disc ">
                <li>Trauma</li>
                <li>For</li>
                <li>Ya Mama</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="sm:w- sm:pb-0">
          <Image
            className="rounded-sm"
            src={"/individualTherapy.jpg"}
            alt="headshot"
            width={600}
            height={500}
          />
        </div>
      </div>

      <div className="container pt-32 gap-20 flex flex-col md:flex-row items-center justify-center">
        <div className="sm:w-1/2 sm:pb-0">
          <Image
            className="rounded-sm"
            src={"/couplesTherapy.jpg"}
            alt="headshot"
            width={600}
            height={500}
          />
        </div>
        <div className="w-full sm:w-1/2 px-6">
          <h1 className="font-tinos text-3xl sm:text-4xl md:text-6xl text-center text-black">
            Individual Therapy
          </h1>
          <div className="w-full h-44 pt-3 bg-[#C3C1AB]">
            <div className="flex flex-row justify-between mx-4  text-black z-10">
              <div className="md:w-1/2">
                <h1 className="font-tinos text-2xl sm:text-3xl md:text-4xl">
                  Specialties
                </h1>
              </div>
              <ul className="md:w-1/2 pt-8 list-disc ">
                <li>Trauma</li>
                <li>For</li>
                <li>Ya Mama</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesInfo;
