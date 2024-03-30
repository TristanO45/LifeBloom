import React from "react";
import Image from "next/image";

function AboutMe(props) {
  return (
    <section
      className="bg-[#dfd4cc] bg-opacity-80 py-20 px-6 sm:px-14"
      id={props.id}
    >
      <div className="container gap-20 flex flex-col-reverse lg:flex-row items-center">
        <div className="sm:w-1/2 px-6 pt-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-serifFont">
            Keisha Libbrecht, MFT
          </h1>
          <p className="text-black text-lg sm:text-xl   ">
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
              <button className="relative overflow-hidden px-6 sm:px-12 py-1 sm:py-3 text-lg sm:text-2xl font-medium text-white bg-[#B1BCA0] border  rounded-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#B1BCA0] ease">
                  Team
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="sm:w-1/2 pb-6 sm:pb-0">
          <Image
            className="rounded-sm"
            src={"/keisha.jpg"}
            alt="headshot"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
