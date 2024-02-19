import React from "react";
import Image from "next/image";
import { techStack } from "../data/data";

function Mission(props) {
  return (
    <section className="py-20 px-6 md:px-14" id={props.id}>
      <div className="container flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 pb-6 md:pb-0">
          <Image
            className="rounded-md"
            src={"/MissionImg.jpg"}
            alt="logo"
            width={600}
            height={500}
          />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-serifFont">
            Our Mission
          </h1>
          <p className="text-black text-lg sm:text-xl px-6 pt-8  ">
            I want to be the very best, like no one ever was. To catch them is
            my true test, to train them is my cause. I will travel across the
            land, searching far and wide. Teach these PokeMon to understand, the
            power thats insiiiiide.
            <br />
            <br />
            PokeMon! Gotta catch em alllll.
            <br />
            <br />
            Download my resume to learn more about my experience.
          </p>

          <div className="pt-8">
            <a href={"/myResume.pdf"} download="Tristan Onfroy Resume">
              <button className="relative overflow-hidden px-6 sm:px-12 py-2 sm:py-3 text-lg sm:text-2xl font-medium text-gray-600 bg-transparent border border-[#57e0c3] rounded-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-[#57e0c3] opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
                  Team
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
