import React from "react";

function Footer(props) {
  return (
    <footer className="bg-[#C3C1AB] py-12" id={props.id}>
      <div className="text-center sm:text-md">
        <h2>
          LifeBloom Marriage & Family Therapy Inc. | Based in Los Angeles, CA
        </h2>
        <div className="flex justify-center space-x-3">
          <a href="/contact" className="hover:text-white">
            Contact Us
          </a>
          <span>|</span>
          <a href="/faq" className="hover:text-white">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
