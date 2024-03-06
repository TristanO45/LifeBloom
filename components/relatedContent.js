import React from "react";
import Image from "next/image";
import { ctaCards } from "../data/data";

function RelatedContent(props) {
  return (
    <section
      className="py-[7vh] px-5 sm:px-14"
      id={props.id}
    >
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 ">
          {ctaCards.map((items, index) => {
            const { desc, imgUrl } = items;
            return (
              <div
                key={index}
                className="group overflow-hidden rounded-md text-center"
              >
                <div className="relative w-full sm:w-auto aspect-h-4">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    <Image src={imgUrl} alt="ctaImg" width={500} height={100} />
                  </div>
                </div>
                <div className=" text-center pt-8">
                  <p className="text-xl sm:text-2xl text-black">{desc}</p>
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
