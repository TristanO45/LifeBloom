import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

function Kristina() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="kristina" className="">
        <div className="w-full lg:gap-20 px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-center items-center">
          <div className="pb-6 lg:pb-0">
            <Image
              className="rounded-sm"
              src={"/keishaHS2.jpg"}
              alt="headshot"
              width={500}
              height={500}
            />
          </div>
          <div className=" lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-tinos">
              Kristina Roman, AFT
            </h1>
            <p className="text-black text-lg sm:text-xl">
              Clinical Social Work/Therapist, ACSW
            </p>
            <p className="pt-8 text-black text-lg sm:text-xl">
              Hi, I’m so happy you’re here. While finding the right therapist
              can be challenging, my mission is to lead with compassion and
              empathy, to create a space for my clients to be authentically
              themselves. If you are struggling with depression, anxiety,
              addiction, grief, chronic illness, life transitions, trauma, or
              relationship issues–you are safe here. <br />
              <br />
              My clients report leaving sessions with a feeling of relief, a
              stronger sense of self-confidence and self-awareness, coping
              skills and actionable steps to use long after therapy has
              concluded. Clients also acknowledge feeling well-supported and
              validated, while being held accountable to uphold the changes they
              seek for themselves.
              <br />
              <br />I work collaboratively with clients, to ensure they are
              receiving the best level of care and leaving sessions feeling seen
              and understood. I harness my education in creative writing,
              journaling, yoga, movement, and interventions such as CBT, Problem
              Solving, Motivational Interviewing, and mindfullness techniques to
              offer my clients a full-circle approach.
            </p>

            <div className="pt-8">
              <Link href="/">
                <button className="relative overflow-hidden px-6 sm:px-12 py-1 sm:py-3 text-lg sm:text-2xl font-medium text-white bg-[#B1BCA0] border  rounded-lg shadow-inner group">
                  <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                  <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
                  <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                  <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                  <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#B1BCA0] ease">
                    Learn More
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container w-full lg:w-1/2 h-auto mb-10 px-2 bg-[]">
          <div className="flex flex-col sm:flex-row text-black z-10">
            <div className="w-full sm:w-1/2 h-min">
              <h1 className="font-licorice text-[#6a6e59] text-4xl sm:text-5xl lg:text-6xl px-5 pl-2 sm:pl-5 lg:pl-10">
                Specialties
              </h1>
            </div>
            <ul className="w-full pt-3 sm:pt-0 pl-4 px-2 grid grid-cols-2 sm:grid-cols-2 gap-x-2 sm:gap-x-5 gap-y-1 list-disc">
              <li>Life transitions</li>
              <li>Identity Development</li>
              <li>Depression</li>
              <li>Anxiety</li>
              <li>OCD</li>
              <li>Stress</li>
              <li>Trauma</li>
              <li>Grief/loss</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kristina;
