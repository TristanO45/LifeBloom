import React from "react";
import Image from "next/image";
import Link from "next/link";
import { teamCard } from "../../data/data";

function TeamCards() {
  return (
    <section className="bg-white py-16 flex justify-center">
      <div className="container mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamCard.map((items, index) => {
          const { imgUrl, textH1, textP, path } = items;
          return (
            <div
              key={index}
              className="bg-white py-4 px-8 flex flex-col rounded-sm overflow-hidden shadow-md max-w-[400px] mx-auto"
            >
              <div className="flex justify-center">
                <Image
                  className=""
                  src={imgUrl}
                  alt="headshot"
                  width={300}
                  height={300}
                  priority
                />
              </div>
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-lg font-semibold">{textH1}</h2>
                <p className="py-2">{textP}</p>
                <Link href={path}>
                  <button className="relative overflow-hidden px-6 sm:px-8 md:px-12 py-1 sm:py-2 text-lg md:text-xl font-medium text-white bg-[#8e9583] border rounded-md shadow-inner group">
                    <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                    <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
                    <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                    <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                    <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                    <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#B1BCA0] ease">
                      Read More
                    </span>
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TeamCards;