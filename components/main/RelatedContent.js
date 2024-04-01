import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ctaCards } from "../../data/data";

function RelatedContent(props) {
  return (
    <section className="py-[7vh] px-5 sm:px-14" id={props.id}>
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-3 ">
          {ctaCards.map((items, index) => {
            const { path, desc1, desc2, imgUrl } = items;
            return (
              <div
                key={index}
                className="group overflow-hidden rounded-md text-center"
              >
                <div className="relative w-full sm:w-auto aspect-h-4">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    <Link href={path}>
                      <Image
                        src={imgUrl}
                        alt="ctaImg"
                        width={500}
                        height={100}
                      />
                    </Link>
                  </div>
                </div>
                <Link href={path}>
                  <div className="text-center pt-5 sm:pt-8">
                    <p className="font-licorice text-4xl sm:text-5xl text-black">
                      {desc1}{" "}
                      <span className="font-tinos text-2xl sm:text-3xl">
                        {desc2}
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RelatedContent;
