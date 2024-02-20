import React from "react";
import Image from "next/image";
import { ctaCards } from "../data/data";

function RelatedContent(props) {
  return (
    <section
      className="py-[6vh] px-5 sm:px-14 bg-[#dfd4cc] bg-opacity-80"
      id={props.id}
    >
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
          {ctaCards.map((items, index) => {
            const { desc, imgUrl } = items;
            return (
              <div
                key={index}
                className=" group overflow-hidden rounded-lg text-center w-full sm:w-auto"
              >
                <div className="transition-transform duration-500 group-hover:scale-110">
                  <Image src={imgUrl} alt="ctaImg" width={700} height={400} />
                </div>
                <div className="p-4">
                  <p className="text-xl sm:text-3xl text-black">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RelatedContent;
