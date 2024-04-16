import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import Link from "next/link";

function Mission(props) {
  return (
    <section className="py-20 px-6 sm:px-14" id={props.id}>
      <div className="container flex flex-col lg:flex-row items-center">
        <Fade left>
        <div className="sm:w-1/2 pb-6 sm:pb-0">
          <Image
            className="rounded-md"
            src={"/MissionImg.jpg"}
            alt="logo"
            width={600}
            height={500}
            priority
          />
        </div>
        </Fade>
        <div className="sm:w-1/2">
          <h1 className="font-tinos text-4xl sm:text-5xl md:text-6xl text-[#6A6E59]">
            We're so glad you found your way here.
          </h1>
          <p className="tracking-wide pt-6 sm:pt-7">
            People come to therapy for many different reasons. Maybe you’re
            feeling lost, or stuck, or maybe you’re searching for relief from
            your emotional distress. Perhaps you are struggling with feeling
            more at ease with your intimate relationships, your career, or other
            important life areas. No matter your situation, we are here for you;
            together we will work to find the best path forward.
          </p>
          <h1 className="font-tinos text-2xl sm:text-3xl md:text-4xl text-[#C3C1AB] pt-6 pb-4">
            Our{" "}
            <span className="font-licorice text-4xl sm:text-5xl md:text-6xl">
              Mission
            </span>
          </h1>
          <p className="tracking-wide">
            At LifeBloom Therapy, we are devoted to helping individuals,
            couples, and families feel empowered to cultivate meaningful,
            long-lasting change in their lives. We are committed to working with
            clients to embrace their inherent capacity for growth and healing
            whether it's in navigating relationships, working through life
            transitions, or finding balance in other crucial life areas.
            <br />
            <br />
            We serve individuals and couples of all races, religions, sexual
            orientations, gender identities, origins, and ethnicities. Through a
            blend of compassionate counseling, evidence-based therapies, and
            personalized guidance, we strive to create a nurturing environment
            where individuals, couples, and families are challenged to overcome
            obstacles, break free from limiting patterns and beliefs, cultivate
            deeper connections to themselves and to others, and flourish into
            their fullest potential.
          </p>

          <div className="pt-8">
            <Link href="/services">
              <button className="relative overflow-hidden px-6 sm:px-12 py-1 sm:py-3 text-lg sm:text-xl font-medium text-white bg-[#6A6E59] border  rounded-md shadow-inner group">
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#B1BCA0] ease">
                  Our Services
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
