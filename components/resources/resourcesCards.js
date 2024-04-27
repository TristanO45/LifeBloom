import React from "react";
import Image from "next/image";
import Link from "next/link";
import { resourcesCards } from "../../data/data";

function ResourcesCards() {
  return (
    <section className="bg-white py-16 flex justify-center">
      <div className="container mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-10">
        {resourcesCards.map((items, index) => {
          const { name, description, buttonText } = items;
          return (
            <div
              key={index}
              className="bg-[#e7e5d9] py-8 px-8 flex flex-col md:flex-col-2 rounded-lg overflow-hidden shadow-md max-w-[400px] mx-auto"
            >
              <div className="card-content py-6 flex flex-col justify-between flex-grow ">
                <h2 className="text-2xl lg:text-3xl font-tinos text-center">
                  {name}
                </h2>
                <p className="py-6 text-sm">{description}</p>
                <div className="w-full">
                  <div className="relative w-full overflow-hidden px-6 sm:px-8 md:px-12 py-2 sm:py-3 text-center text-md md:text-lg font-medium text-white bg-[#6a6e59] border rounded-md shadow-inner group">
                    {buttonText}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ResourcesCards;
