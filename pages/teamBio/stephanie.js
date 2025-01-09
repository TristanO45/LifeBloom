import React from "react";
import Image from "next/image";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

function Stephanie() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div id="stephanie" className="flex flex-col justify-center items-center">
        <div className="bg-[#e7e5d9] w-full lg:gap-20 px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-center items-center">
          <div className="pb-6 lg:pb-0">
            <Image
              className="rounded-sm"
              src={"/stephanie.jpg"}
              alt="headshot"
              width={500}
              height={500}
            />
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-tinos">
              Stephanie Wickens, AMFT
            </h1>
            <p className="text-black text-md sm:text-lg pt-2">
              Marriage & Family Therapist Associate, AMFT
              <br />
              SLWickens2@gmail.com | (818) 821-0936
            </p>
            <p className="pt-12 text-black text-lg sm:text-xl">
              You feel stuck. Exhausted. No matter how hard you try, nothing
              seems to be falling into place. Life isn’t what you thought it
              would be, and you’re frustrated. Whether it’s relationships, work,
              or just trying to keep it together, you feel like you’re falling
              behind. But it doesn’t have to be this way. Therapy is a powerful
              step toward making real changes, and I’m here to help you break
              out of that cycle and build the life you want. <br />
              <br />
              You already have everything you need inside you. I’ll help you
              unlock it. Together, we’ll figure out what’s been holding you back
              and how to get your mind and body working together. This isn’t
              about fixing you—it’s about finding the real you and building a
              life that actually makes you happy.
              <br />
              <br />
              Life feels overwhelming, but you don’t have to do it alone. I’ll
              hold hope for you, even when it’s hard for you to hold it
              yourself. If you’re ready to stop feeling stuck and start making
              moves, give me a call, and let’s make it happen.
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
              <li>Depression</li>
              <li>Trauma</li>
              <li>Anxiety</li>
              <li>Stress</li>
              <li>Relationship Issues</li>
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

export default Stephanie;
