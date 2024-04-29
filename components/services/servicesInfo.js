import React from "react";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import Link from "next/link";

function ServicesInfo(props) {
  return (
    <section
      className="pt-12 lg:pt-20 flex flex-col items-center"
      id={props.id}
    >
      <div className="w-auto pb-16 px-6 lg:gap-20 flex flex-col-reverse lg:flex-row justify-center">
        <div className="w-full lg:w-1/2 pt-10 lg:pt-8 py-6">
          <h1 className="font-tinos tracking-wide pb-8 text-3xl sm:text-4xl md:text-5xl text-center text-black">
            Individual Therapy
          </h1>
          <p className="tracking-wide pb-10">
            A common thread among people’s unique circumstance is the feeling of
            being "lost" or "stuck." This can be due to big life changes or
            transitions (like moving to a new location, losing a loved one,
            getting married,) or by disruptions in an important relationship,
            your health, or your school or work life. <br />
            <br />
            You might know exactly what you are hoping to work through and other
            times you may not know or understand why you’ve been feeling a bit
            depressed or anxious, or acting in ways that are not condusive to a
            fulfilling life. <br />
            <br />
            Therapy is a space to explore, process, and gain a deeper
            understanding of our ourselves. There is no “one size fits all”
            approach; you are a unique individual made up of all your
            experiences and your relationships with others. Together, you and
            your therapist will explore your challenges, get to the root of
            them, and make a plan to help you move forward
          </p>
          <div className="container w-full h-auto mb-10 px-2">
            <div className="flex flex-col sm:flex-row text-black z-10">
              <div className="w-full sm:w-3/4 h-min">
                <h1 className="font-licorice text-[#6a6e59] text-4xl sm:text-5xl lg:text-6xl px-5 pl-2 sm:pl-5 lg:pl-10">
                  Specialties
                </h1>
              </div>
              <ul className="w-full pt-3 sm:pt-0 pl-4 px-2 grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-5 gap-y-1 list-disc">
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
        <Fade left ssrFadeout={true} duration={500}>
          <div className="pb-4 sm:px-0 flex justify-center">
            <Image
              className="rounded-sm"
              src={"/individualTherapy5.jpg"}
              alt="headshot"
              width={500}
              height={500}
            />
          </div>
        </Fade>
      </div>

      <div className="w-full bg-[#E7E5D9] pt-20 pb-20 px-6 lg:gap-20 flex flex-col-reverse lg:flex-row-reverse justify-center">
        <div className="w-full lg:w-1/2 py-6">
          <h1 className="font-tinos tracking-wide pb-8 text-3xl sm:text-4xl md:text-5xl text-center text-black">
            Couples Therapy
          </h1>
          <p className="tracking-wide pb-10">
            No matter what stage of a relationship you’re in, there will be
            conflicts that arise, miscommunication, emotional injuries, and
            difficulties around feeling like your partner cannot hear or
            understand your needs. These challenges are natural. How you
            navigate them makes all the difference. Do you fight or turn away
            from each other? Can you open up, trust, lean in, and take the
            necessary steps to reconnect?
            <br />
            <br />
            Couples often find themselves caught in repetitive negative and
            painful cycles of conflict or distance that cause significant
            distress. This can leave individuals feeling frustrated, helpless,
            hopeless, or just broken. At LifeBloom Therapy, we specialize in
            Emotionally Focused Therapy (EFT) which can help identify and
            address the obvious and not-so-obvious patterns. For couples, EFT
            can help you identify and step out of painful negative cycles and
            find your way back to your partner to create a strong and secure
            emotional and sexual bond.
            <br />
            <br />
            Whether you’re in a long-term relationship or a new one,
            contemplating a deeper commitment or already there, we work with
            couples of all genders and orientations who want to face their
            challenges with honesty and compassion and build a secure base of
            connection and trust.
          </p>
          <div className="container w-full h-auto mb-10 py-5 px-2 bg-[white] shadow-md">
            <div className="flex flex-col sm:flex-row text-black z-10">
              <div className="w-full sm:w-2/4 h-min">
                <h1 className="font-licorice text-[#6a6e59] text-4xl sm:text-5xl lg:text-6xl px-5 pl-2 sm:pl-5">
                  Specialties
                </h1>
              </div>
              <ul className="w-full pt-3 sm:pt-0 pl-4 px-2 grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-8 gap-y-2 list-disc">
                <div>
                  <li className="">Life transitions</li>
                  <li className="break-words">Communication issues</li>
                  <li className="break-words">Recurring conflict</li>
                  <li className="break-words">
                    Loss of emotional or physical intimacy
                  </li>
                </div>
                <div>
                  <li className="break-words">
                    Infidelity and other emotional injuries
                  </li>
                  <li className="break-words">Sexual problems/disconnection</li>
                  <li className="break-words">Major life decision making</li>
                  <li className="break-words">Premarital counseling</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <Fade
          left
          collapse={true}
          ssrReveal={true}
          ssrFadeout={true}
          duration={500}
        >
          <div className="pb-4 px-3 sm:px-0 flex justify-center">
            <Image
              className="rounded-sm"
              src={"/couplesTherapy.jpg"}
              alt="headshot"
              width={500}
              height={500}
            />
          </div>
        </Fade>
      </div>

      <div className="w-full pt-20 pb-5 px-6 lg:gap-20 flex flex-col-reverse lg:flex-row justify-center">
        <div className="lg:w-1/4 py-6">
          <h1 className="font-tinos tracking-wide pb-8 text-3xl sm:text-4xl md:text-5xl text-center text-black">
            Clinical Supervision for Therapists
          </h1>
          <p className="tracking-wide pb-10 break-words">
            Clinical supervision opportunities with Keisha are available for
            pre-licensed clinicians. Supervision is trainee-centered,
            collaborative, and attentive to both theoretical and experiential
            components of the clinical work; in addition to focusing on issues
            centered around clients, we also explore and address the therapist
            as a human being in the room. Group and individual supervision may
            be available.
            <br />
            <br />
            With years of experience in diverse settings, including community
            mental health, partial hospitalization programs, group and private
            practice, we are here to guide you on your professional journey.
            <br />
            <br />
            Please contact Keisha directly about possible supervision openings:
            Keisha@KeishaLibbrecht.com
          </p>
        </div>

        <div className="pb-4 px-3 sm:px-0 flex justify-center">
          <Image
            className="rounded-sm"
            src={"/supervision2.jpg"}
            alt="headshot"
            width={900}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}

export default ServicesInfo;
