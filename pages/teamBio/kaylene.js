import React from "react";
import Image from "next/image";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

function Kaylene() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div id="stephanie" className="flex flex-col justify-center items-center">
        <div className="bg-[#e7e5d9] w-full lg:gap-20 px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-center items-center">
          <div className="pb-6 lg:pb-0">
            <Image
              className="rounded-sm"
              src={"/KayleneHS.jpg"}
              alt="headshot"
              width={500}
              height={500}
            />
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-tinos">
              Kaylene Woo, AMFT
            </h1>
            <p className="text-black text-md sm:text-lg pt-2">
              Marriage & Family Therapist Associate, AMFT
              <br />
              kaylenewootherapy@gmail.com | (818) 482-2962
            </p>
            <p className="pt-12 text-black text-lg sm:text-xl">
              We all exist within the context of our upbringing, cultural
              heritage, and our relationships. My goal is to help you better
              understand your patterns, identity, and how your experiences have
              shaped you—so you can move forward with clarity and confidence.
              Whether you’re grappling with questions about who you are or
              struggling to navigate your direction in life, I’m here to provide
              support and practical solutions tailored to you. <br />
              <br />
              I'm particularly passionate about working with Asian Americans. I
              integrate collectivistic perspectives into my practice to process
              cultural heritage and its impact on your sense of self. Whether
              it’s navigating intergenerational conflict, balancing cultural
              expectations, or understanding yourself better, I’ll adapt my
              approach to meet your specific needs.
              <br />
              <br />
              My clients say they leave therapy with greater understanding of
              themselves and others, and feel more confident to tackle the
              challenges they face in their everyday life. I believe in your
              ability to grow and create lasting, meaningful change and we’ll
              work together to discover what works best for your unique
              experiences, goals, and challenges.
              <br />
              <br />
              To book a consultation call, please send an email to
              kaylenewootherapy@gmail.com or call/text me at (818) 482-2962.
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
              <li>Anxiety</li>
              <li>Depression</li>
              <li>Racial Identity</li>
              <li>ADHD</li>
              <li>Mood Disorders</li>
              <li>Family Conflict</li>
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

export default Kaylene;
