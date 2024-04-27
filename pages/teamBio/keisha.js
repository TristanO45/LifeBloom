import React from "react";
import Image from "next/image";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

function Keisha() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div id="keisha" className="flex flex-col justify-center items-center">
        <div className="bg-[#e7e5d9] w-full lg:gap-20 px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-center items-center">
          <div className="pb-6 lg:pb-0">
            <Image
              className="rounded-sm"
              src={"/keisha1.jpg"}
              alt="headshot"
              width={500}
              height={500}
            />
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-tinos">
              Keisha Libbrecht, LMFT
            </h1>
            <p className="text-black text-md sm:text-lg pt-2">
              Marriage & Family Therapist, LMFT
              <br />
              KeishaLibbrecht@gmail.com | (424)835-5752
            </p>
            <p className="pt-12 text-black text-lg sm:text-xl">
              You feel stuck emotionally, or feel anxious or depressed. You are
              struggling with feeling more at ease with your intimate
              relationships, your career, or other areas. Somehow, life is not
              feeling fulfilled in the ways that you want it to. I want to help
              you achieve whatever goals you are looking for. I know that the
              first step can be a little intimidating and I hope you will take a
              moment, and maybe a deep breath, to contact me and see how I can
              help. <br />
              <br />
              My goal is to work collaboratively with you to discover your best
              self. Together we will work on finding emotional freedom and
              finding your self-empowerment. Therapy can provide you with the
              tools to make meaningful, long-lasting changes in your life and
              most important relationships while developing a deeper
              understanding of yourself.
              <br />
              <br />I have successfully provided counseling to individuals and
              couples who have experienced issues of depression, anxiety, loss,
              grief, stresses of life transitions, and turmoil of family and
              work-related changes. My specialty is relationship-related issues
              including trust and security, unhealthy patterns of interaction,
              and conflict resolution.
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
            <ul className="w-full pl-8 sm:pl-0 pt-3 sm:pt-0 mx-auto justify-center grid grid-cols-2 gap-x-8 gap-y-2 list-disc">
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

export default Keisha;
