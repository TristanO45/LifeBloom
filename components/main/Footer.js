import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className="bg-[#C3C1AB] py-8" id={props.id}>
      <div className="flex flex-col justify-center items-center ">
        <div className="flex justify-center">
          <Image
            src={"/logo4.png"}
            alt="footerLogo"
            width={100}
            height={100}
            className="rounded-sm"
          />
        </div>
        <div className="pt-4 pb-4 text-center px-4">
          <h2>
            LifeBloom Marriage & Family Therapy Inc. | Based in Los Angeles, CA
          </h2>
        </div>

        <div className="space-x-3">
          <Link href="/contact" className="hover:text-white">
            Contact Us
          </Link>
          <span>|</span>
          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
