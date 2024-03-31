import React from "react";

// react-icons

import { BsXDiamondFill, BsFillPersonVcardFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";

// Navbar menu

const navbarMenuLeft = [
  {
    text: "Home",
    icon: <BsXDiamondFill className="text-[#5fefd0] inline-block" />,
    url: "/",
  },
  {
    text: "Team",
    icon: <BsFillPersonVcardFill className="text-[#5fefd0] inline-block" />,
    url: "/team",
  },
  {
    text: "Services",
    icon: <AiFillProject className="text-[#5fefd0]  inline-block" />,
    url: "/services",
  },
];

const navbarMenuRight = [
  {
    text: "FAQ",
    icon: <BsXDiamondFill className="text-[#5fefd0] inline-block" />,
    url: "/faq",
  },
  {
    text: "Resources",
    icon: <BsFillPersonVcardFill className="text-[#5fefd0] inline-block" />,
    url: "/resources",
  },
  {
    text: "Contact",
    icon: <AiFillProject className="text-[#5fefd0]  inline-block" />,
    url: "/contact",
  },
];

const navbarMenuHamburger = [
  {
    text: "Home",
    icon: <BsXDiamondFill className="text-[#5fefd0] inline-block" />,
    url: "/",
  },
  {
    text: "Team",
    icon: <BsFillPersonVcardFill className="text-[#5fefd0] inline-block" />,
    url: "/team",
  },
  {
    text: "Services",
    icon: <AiFillProject className="text-[#5fefd0]  inline-block" />,
    url: "/services",
  },
  {
    text: "FAQ",
    icon: <BsXDiamondFill className="text-[#5fefd0] inline-block" />,
    url: "/faq",
  },
  {
    text: "Resources",
    icon: <BsFillPersonVcardFill className="text-[#5fefd0] inline-block" />,
    url: "/resources",
  },
  {
    text: "Contact",
    icon: <AiFillProject className="text-[#5fefd0]  inline-block" />,
    url: "/contact",
  },
];

// Call to Action Cards

const ctaCards = [
  {
    desc1: "Request",
    desc2: "an Appointment",
    imgUrl: "/RequestApt.jpg",
  },
  {
    desc1: "Explore",
    desc2: "our Services",
    imgUrl: "/ExploreServices.jpg",
  },
  {
    desc2: "FAQ",
    imgUrl: "/FAQ.jpg",
  },
];

// Team Cards

const teamCard = [
  {
    imgUrl: "KeishaHS.jpg",
    textH1: "Keisha Libbrecht, M.A. LMFT",
    textP: "CEO & Founder | Clinical Director",
    path: "temp",
  },
  {
    imgUrl: "KeishaHS2.jpg",
    textH1: "Lilly Coy, AMFT",
    textP: "Associate Therapist",
    path: "temp",
  },
  {
    imgUrl: "KeishaHS3.jpg",
    textH1: "Potato Butt, M.A. LMFT",
    textP: "Associate Therapist",
    path: "temp",
  },
];

export {
  navbarMenuLeft,
  navbarMenuRight,
  navbarMenuHamburger,
  ctaCards,
  teamCard,
};
