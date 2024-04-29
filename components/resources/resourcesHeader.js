import React from "react";
import Link from "next/link";
import Image from "next/image";

function ResourcesHeader() {
  return (
    <section className="relative">
      <div className="w-full lg:h-[40vh] overflow-hidden flex items-center justify-center">
        <div className="opacity-90">
          <Image
            src="/crisisHeader.jpg"
            alt="headerimg3"
            fill={true}
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </div>
        <div className="relative w-full py-6 px-6 lg:gap-20 flex flex-col-reverse lg:flex-row justify-center items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-center pt-6 lg:pt-0 space-y-2 ">
            <h1 className="font-tinos tracking-wide pb-6 text-3xl sm:text-4xl md:text-5xl text-white ">
              Crisis Contacts
            </h1>
            <p className="tracking-wide pb-10 text-center text-white">
              Sometimes the next business day isn’t soon enough. The following
              numbers offer services 24/7 to anyone in a crisis. <br />
              
              Not sure when to dial 911? Always err on the side of caution. When
              in doubt, call.
            </p>
          </div>

          <div>
            <Image
              className="rounded-sm"
              src={"/crisisImg.jpg"}
              alt="resourcesImg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ResourcesHeader;
