import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";

function AboutMe(props) {
  return (
    <section
      className="bg-[#E7E5D9] py-12 px-6 flex justify-center"
      id={props.id}
    >
      <div className="gap-10 flex flex-col-reverse lg:flex-row items-center justify-center pt-5">
        <div className="lg:w-1/2 text-center lg:text-start">
          <h1 className="text-5xl sm:text-6xl md:text-8xl text-black text-center font-licorice">
            Hi, I'm Keisha!
          </h1>
          <p className="text-black text-lg sm:text-xl pt-7">
            Pronounced "kay-sha!" As a therapist and owner of LifeBloom Therapy,
            my goal is simple: to provide a safe space where you can feel heard,
            supported, and empowered to navigate life's many twists and turns.
            Seeing people move from pain to openness, from disconnection to
            reconnection, from breakdown to thriving again, has been such a
            privilege - I am so deeply committed to and fulfilled by this work
            and it has been a great joy finding a team of therapists who share
            in that passion.
            <br />
            <br />
            When I'm not in the therapist's chair, you can probably find me
            curled up reading a fun story about some dystopian future, or baking
            a dessert that likely turns out almost inedible, or going to the
            beach with my husband and friends.
            <br />
            <br />
            In addition to providing psychotherapy, I consult with a wide range
            of professionals on issues within psychology and provide supervision
            to associates who are working towards licensure in California.
          </p>

          <div className="pt-14">
            <a href={"/team"}>
              <button className="relative overflow-hidden px-6 sm:px-12 py-1 sm:py-3 text-lg sm:text-xl font-medium text-white bg-[#6A6E59] border  rounded-lg shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#6A6E59] ease">
                  Meet the Team
                </span>
              </button>
            </a>
          </div>
        </div>
        <Fade left>
          <div className="pb-6 sm:pb-0">
            <Image
              className="rounded-sm"
              src={"/keisha3.jpg"}
              alt="headshot"
              width={500}
              height={400}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
}

export default AboutMe;
