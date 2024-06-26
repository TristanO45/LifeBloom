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
              src={"/stephanie1.jpg"}
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
              Hi and welcome! Starting therapy is a brave act of self-love,
              whether this is your first time or you are returning. I hope to
              join you on this journey, where your unique narrative and
              experiences take center stage. Being a human can be so challenging
              and confusing and I am here to help you make sense of it all.
              Together, we'll explore the patterns and beliefs that have made
              your life more difficult. I will help you discover how to make
              your life more balanced, purposeful, and joyful. <br />
              <br />
              I will assist you in using the strengths that already lie within
              you to effectively help you connect to your true self. We will
              explore the connection between your mind and body, and how they
              influence each other and work with your brain to develop neural
              connections that better suit your ideal life.
              <br />
              <br />
              With empathy and skill, I will work along side you to create the
              reality you desire. I will always hold hope for you, even when it
              is hard to hold yourself. Let's embark on this new chapter
              together, creating a future where you feel empowered, deeply
              understood, and ready to embrace the full spectrum of your life
              with ambition and strength.
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
