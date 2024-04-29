import React from "react";
import Image from "next/image";

function FaqHeader() {
  return (
    <section className="relative">
      <div className="w-full h-72 sm:h-[25vh] overflow-hidden opacity-80">
        <Image
          src="/faqHeader2.jpg"
          alt="headerimg4"
          fill={true}
          style={{ objectFit: "cover" }}
          priority={true}
        />
        <div className="absolute w-full inset-0 flex flex-col justify-center items-center ">
          <h1 className="font-tinos tracking-wide text-3xl sm:text-4xl md:text-5xl text-white">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
    </section>
  );
}

export default FaqHeader;
