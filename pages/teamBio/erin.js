import React from "react";
import Image from "next/image";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

function Erin() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div id="stephanie" className="flex flex-col justify-center items-center">
        <div className="bg-[#e7e5d9] w-full lg:gap-20 px-10 lg:px-20 py-10 flex flex-col lg:flex-row justify-center items-center">
          <div className="pb-6 lg:pb-0">
            <Image
              className="rounded-sm"
              src={"/ErinHeadshot.png"}
              alt="headshot"
              width={500}
              height={500}
            />
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-3xl sm:text-4xl md:text-6xl text-black font-tinos">
              Erin Aiko Schroeder, AMFT
            </h1>
            <p className="text-black text-md sm:text-lg pt-2">
              Marriage & Family Therapist Associate, AMFT
              <br />
              erinschroedermft@gmail.com
            </p>
            <p className="pt-12 text-black text-lg sm:text-xl">
              Feeling like your health bar is drained? Something’s been
              depleting you, and you know it’s time to face it head-on. If
              you’re looking for a space to pause, sort through the chaos, and
              create a life that feels meaningful and true to you, I’m here to
              support you! As a mixed-race therapist with ADHD, I offer a warm,
              compassionate, and inclusive space for children, teens, adults,
              and families to navigate life’s complexities. I’m especially
              passionate about helping people find balance with screen-time,
              gaming culture, and social media use. I believe in helping you
              build a life that feels authentic and right for you. <br />
              <br />
              My approach centers on understanding your unique background and
              relationships, helping you explore your values, beliefs, and how
              past experiences shape who you are. With increased clarity and
              practical tools, I support my clients in navigating life’s
              challenges, fostering deeper connections with themselves, their
              relationships, and the world.
              <br />
              <br />
              You don’t have to face these struggles alone. It’s normal to feel
              overwhelmed, and I’m here to help you work through it. If you’re
              interested in exploring how we can work together, please feel free
              to reach out for a free consultation via call or email. I’d love
              to hear from you!
              <br />
              <br />
              To book a consultation call, please send an email to
              kaylenewootherapy@gmail.com.
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
              <li>Life Transitions</li>
              <li>Internet Addiction</li>
              <li>Depression</li>
              <li>Video Game Addiction</li>
              <li>Relationship Issues</li>
              <li>ADHD</li>
              <li>Self Esteem</li>
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

export default Erin;
