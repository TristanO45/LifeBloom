import React from "react";
import Image from "next/image";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

function Kristine() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div id="kristina" className=" flex flex-col justify-center items-center">
        <div className="bg-[#e7e5d9] w-full lg:gap-20 px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-center items-center">
          <div className="pb-6 lg:pb-0">
            <Image
              className="rounded-sm"
              src={"/kristine.jpg"}
              alt="headshot"
              width={500}
              height={500}
            />
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-tinos">
              Kristine Singh, AMFT, APCC
            </h1>
            <p className="text-black text-md sm:text-lg pt-2">
              Associate Therapist, AMFT, APCC
              <br />
              Kristinesinghmft@gmail.com
            </p>
            <p className="pt-12 text-black text-lg sm:text-xl">
              Taking the first step toward therapy is an act of courage, and my
              goal is to honor that by creating a space where you feel safe,
              supported, and empowered to explore your authentic self. Whether
              you’re navigating anxiety, depression, grief, trauma, life
              transitions, or relationship challenges, I’m here to help you feel
              seen, understood, and capable of growth. <br />
              <br />
              As a first-generation Indo-Fijian therapist, I bring a culturally
              inclusive perspective to our work together, honoring the rich and
              diverse experiences that shape your story. My client-centered and
              solutions-focused approach blends evidence-based practices like
              CBT, mindfulness, and narrative therapy with an emphasis on
              self-exploration and values alignment. Together, we will uncover
              the strengths within you, build clarity, and develop actionable
              steps to help you create a life that feels meaningful and
              fulfilling.
              <br />
              <br />
              My mission is to help you reconnect with your inner wisdom and
              find healing that lasts far beyond our sessions. If you’re ready
              to break through limiting beliefs, overcome self-doubt, and
              embrace the person you’re meant to be, I’d be honored to walk
              alongside you on this journey.
              <br />
              <br />
              To book a consultation call with me, please send me an email to
              Kristinesinghmft@gmail.com.
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

export default Kristine;
