import React from "react";
import { useState } from "react";
import Link from "next/link";
// import { useRouter } from "next/router";
import Image from "next/image";
import {
  navbarMenuLeft,
  navbarMenuRight,
  navbarMenuHamburger,
  socialIcons,
} from "../../data/data";

// Sidebar component
export default function Navbar() {
  // useRouter hook will be used for navigating each page
  // const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Using this to update the state of the sidebar link color state
  // const [colorChange, setColorChange] = useState("Home");

  return (
    <nav className="sticky top-0 w-full flex justify-between items-center lg:px-36 px-10 py-4 bg-white text-black z-50">
      <div className="flex items-center space-x-4">
        {/* Navbar menu items (visible on desktop) */}
        <ul className="hidden lg:flex space-x-4">
          {navbarMenuLeft.map((link, index) => (
            <li key={index}>
              <Link href={link.url} className="hover:text-[#6A6E59]">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Image
          src={"/logo.jpg"}
          alt="Headshot"
          width="130"
          height="50"
          className="rounded-full"
        />
      </div>

      <div className="flex items-center space-x-4">
        {/* Navbar menu items (visible on desktop) */}
        <ul className="hidden lg:flex space-x-4">
          {navbarMenuRight.map((link, index) => (
            <li key={index}>
              <Link href={link.url} className="hover:text-[#5fefd0]">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        {/* Hamburger menu button (visible on mobile) */}
        <div className="lg:hidden">
          <button className="text-2xl focus:outline-none" onClick={toggleMenu}>
            &#9776;
          </button>
        </div>
      </div>

      {/* Hamburger menu (visible on mobile) */}
      {menuOpen && (
        <ul className="lg:hidden fixed top-16 right-4 bg-white p-4 space-y-2">
          {navbarMenuHamburger.map((link, index) => (
            <li key={index}>
              <Link href={link.url} className="hover:text-[#5fefd0]">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* <div className="flex space-x-4">
        {socialIcons.map((icons, index) => {
          const { icon, url } = icons;
          return (
            <a href={url} target="_blank" key={index} rel="noreferrer">
              {icon}
            </a>
          );
        })}
      </div> */}
    </nav>
  );
}
