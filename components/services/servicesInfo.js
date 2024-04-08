import React from "react";
import Image from "next/image";
import Link from "next/link";

function ServicesInfo(props) {
  return (
    <section className="pt-8  sm:px-14" id={props.id}>
      <div className="container gap-20 flex flex-col-reverse lg:flex-row items-center justify-center">
        <div className="w-full sm:w-1/2 px-6 space-y-4">
          <h1 className="font-tinos tracking-wide pb-8 text-3xl sm:text-4xl md:text-6xl text-center text-black">
            Individual Therapy
          </h1>
          <p className="pb-16 tracking-wide">
            A common thread among people’s unique circumstance is the feeling of
            being "lost" or "stuck." You might feel pain, hurt, and emotional
            discomfort - and it may be difficult to identify the source of that
            discomfort or pain. <br />
            <br />
            This can be due to growing pains, big life changes or transitions
            (like losing a loved one, getting married, moving to a new location)
            or by disruptions in an important relationship, your health, or your
            school or work life. Other times you may not know or understand why
            you’ve been feeling a bit depressed or anxious, or acting in ways
            you don’t understand – there may not be a specific cause you can
            identify. <br />
            <br />
            There is no “one size fits all” approach; you are a unique
            individual made up of all your experiences and your relationships
            with others. Together, you and your therapist will explore your
            challenges, get to the root of them, and make a plan to help you
            move forward
          </p>
          <div className="w-full h-auto py-5 pr-2 border-black border  bg-[#C3C1AB]">
            <div className="flex flex-row justify-between text-black z-10">
              <div className="w-auto flex flex-col md:w-1/2 sm:justify-center">
                <h1 className="font-tinos text-2xl sm:text-3xl md:text-4xl pl-3 sm:pl-10">
                  Specialties
                </h1>
              </div>
              <ul className="md:w-1/2 pt-3 pr-5 grid grid-cols-2 sm:grid-cols-2 gap-1 list-disc ">
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
        <div className="pb-4 px-3 sm:px-0">
          <Image
            className="rounded-sm"
            src={"/individualTherapy.jpg"}
            alt="headshot"
            width={600}
            height={500}
          />
        </div>
      </div>

      <div className="container  bg-[#e7e5d9] pt-32 gap-20 flex flex-col md:flex-row items-center justify-center">
        <div className="sm:w-1/2 sm:pb-0">
          <Image
            className="rounded-sm"
            src={"/couplesTherapy.jpg"}
            alt="headshot"
            width={600}
            height={500}
          />
        </div>
        <div className="w-full sm:w-1/2 px-6">
          <h1 className="font-tinos text-3xl sm:text-4xl md:text-6xl text-center text-black">
            Individual Therapy
          </h1>
          <div className="w-full h-44 pt-3 bg-[#C3C1AB]">
            <div className="flex flex-row justify-between mx-4  text-black z-10">
              <div className="md:w-1/2">
                <h1 className="font-tinos text-2xl sm:text-3xl md:text-4xl">
                  Specialties
                </h1>
              </div>
              <ul className="md:w-1/2 pt-8 list-disc ">
                <li>Trauma</li>
                <li>For</li>
                <li>Ya Mama</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesInfo;
