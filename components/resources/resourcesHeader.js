import React from "react";
import Link from "next/link";
import Image from "next/image";

function ResourcesHeader() {
  return (
    <section className="relative bg-[#c3c1ab]">
      <div className="w-full py-16 px-6 gap-20 flex flex-col-reverse lg:flex-row justify-center items-center">
        <div className="w-full lg:w-1/4 flex flex-col items-center  space-y-4">
          <h1 className="font-tinos tracking-wide pb-8 text-3xl sm:text-4xl md:text-5xl text-black">
            Crisis Contacts
          </h1>
          <p className="tracking-wide pb-10 text-center">
            Sometimes the next business day isn’t soon enough. The following
            numbers offer services 24/7 to anyone in a crisis. <br />
            <br />
            Not sure when to dial 911? Always err on the side of caution. When
            in doubt, call.
          </p>
        </div>

        <div className="">
          <Image
            className="rounded-sm"
            src={"/crisisHeader1.jpg"}
            alt="resourcesImg"
            width={600}
            height={500}
          />
        </div>
      </div>
    </section>
  );
}

export default ResourcesHeader;
