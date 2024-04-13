import React from "react";

function FaqHeader() {
  return (
    <section>
      <div className="bg-[#6a6e59] h-[30vh] w-full flex flex-col-reverse lg:flex-row items-center">
        <div className="w-full flex flex-col items-center">
          <h1 className="font-tinos tracking-wide text-3xl sm:text-4xl md:text-5xl text-black">
            Frequently Asked Questions
          </h1>
        </div>
      </div>
    </section>
  );
}

export default FaqHeader;
