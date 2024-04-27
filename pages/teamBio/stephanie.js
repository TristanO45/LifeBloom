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
              Stephanie@gmail.com | (818)532-5489
            </p>
            <p className="pt-12 text-black text-lg sm:text-xl">
              Taking this therapeutic journey is a bold step toward
              self-discovery and healing, where your unique narrative and
              experiences take center stage. Together, we'll explore the deep
              and intricate connection between your mind and body, acknowledging
              the profound impact this relationship has on your path to
              wellness. Our collaboration will be rooted in empathy and respect,
              focusing on drawing out the strengths that already lie within you
              to face life's complexities. <br />
              <br />
              We'll work together to understand the patterns that have shaped
              your experiences, transforming them into stepping stones toward a
              more fulfilling and balanced life. This journey is about more than
              just overcoming obstacles; it's about building a foundation for
              lasting change.
              <br />
              <br />
              Let's embark on this new chapter together, creating a future where
              you feel wholly empowered, deeply understood, and ready to embrace
              the full spectrum of your life with hope and strength.
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

export default Stephanie;
