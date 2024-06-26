import React from "react";
import Image from "next/image";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

function Kristina() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div id="kristina" className=" flex flex-col justify-center items-center">
        <div className="bg-[#e7e5d9] w-full lg:gap-20 px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-center items-center">
          <div className="pb-6 lg:pb-0">
            <Image
              className="rounded-sm"
              src={"/kristina.jpeg"}
              alt="headshot"
              width={500}
              height={500}
            />
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-tinos">
              Kristina Roman, ASW
            </h1>
            <p className="text-black text-md sm:text-lg pt-2">
              Clinical Social Worker/Therapist, ASW
              <br />
              KristinaRoseRoman@gmail.com | (424)501-5950
            </p>
            <p className="pt-12 text-black text-lg sm:text-xl">
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
              <br />
              <br />
              To book a consultation call with me, please send me an email to
              kristinaroseroman@gmail.com or call/text me (424)501-5950.
            </p>
          </div>
        </div>

        <div className="w-full h-auto flex flex-col sm:flex-row justify-center items-center lg:space-x-32 py-16">
          <div className="flex flex-col sm:flex-row items-center justify-center text-black">
            <div className="w-full text-center">
              <h1 className="font-licorice text-[#6a6e59] text-4xl sm:text-5xl lg:text-6xl sm:pr-8 lg:pr-16">
                Specialties
              </h1>
            </div>
            <ul className="w-full pl-8 sm:pl-0 pt-3 sm:pt-0 mx-auto justify-center grid grid-cols-2 gap-x-8  gap-y-2 list-disc">
              <li>Addiction</li>
              <li>ADHD</li>
              <li>Depression</li>
              <li>Anxiety</li>
              <li>Stress</li>
              <li>Trauma</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row items-center pt-10 sm:pt-0 text-black">
            <div className="text-center">
              <h1 className="font-licorice text-[#6a6e59] text-4xl sm:text-5xl lg:text-6xl sm:pr-8 lg:pr-16">
                Client Focus
              </h1>
            </div>
            <div>
              <ul className="w-full mx-auto pl-8 sm:pl-0 pt-3 sm:pt-0 grid grid-cols-2 gap-x-8  gap-y-2 list-disc">
                <li>Teens</li>
                <li>Adults</li>
                <li>Individual</li>
                <li>Couples</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Kristina;
