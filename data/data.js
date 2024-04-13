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
    path: "/contact",
  },
  {
    desc1: "Explore",
    desc2: "our Services",
    imgUrl: "/ExploreServices.jpg",
    path: "/services",
  },
  {
    desc1: "",
    desc2: "FAQ",
    imgUrl: "/FAQ.jpg",
    path: "/faq",
  },
];

// Team Cards

const teamCard = [
  {
    imgUrl: "Kristina.jpeg",
    name: "Kristina Roman, ACSW",
    title: "Associate Therapist & Clinical Social Worker",
    specializations: ["Adults, Adolescents & Couples"],
    path: "temp",
  },
  {
    imgUrl: "KeishaHS2.jpg",
    name: "Lilly Coy, AMFT",
    title: "Associate Therapist",
    specializations: ["Adults, Adolescents & Couples"],
    path: "temp",
  },
  {
    imgUrl: "KeishaHS2.jpg",
    name: "Keisha Libbrecht, LMFT",
    title: "Licensed Therapist & Supervisor | CEO & Founder",
    specializations: ["Adults & Couples"],
    path: "temp",
  },
];

// Resources Cards

const resourcesCards = [
  {
    name: "National Suicide Prevention Lifeline",
    description:
      "Provides 24/7, free and confidential support for people in distress. Also provides prevention and crisis resources and best practices for professionals.",
    buttonText: "988",
  },
  {
    name: "Crisis Text Line",
    description:
      "Textline service for anyone in any type of crisis, providing access to free, 24/7 support and information.",
    buttonText: "Text HOME to 741741",
  },
  {
    name: "National Domestic Violence Hotline",
    description:
      "Available 24/7 to talk confidentially with anyone experiencing domestic violence, seeking resources or information, or questioning unhealthy aspects of their relationship.",
    buttonText: "1-800-799-7233",
  },
  {
    name: "National Sexual Assault Hotline",
    description:
      "24/7 hotline with a trained staff member from a sexual assault service provider in your area.",
    buttonText: "1-800-656-4673",
  },
  {
    name: "Trevor Crisis Hotline",
    description:
      "24/7 hotline with trained counselors providing crisis intervention, suicide prevention, and a safe, judgment-free place to talk for LGBTQ youth.",
    buttonText: "1-800-488-7386",
  },
  {
    name: "Alcoholism & Drug Dependence Hopeline",
    description:
      "24/7 service with trained professionals providing information, assessing situations, and giving referrals to the most appropriate resources in local communities.",
    buttonText: "1-800-622-2255",
  },
];

export {
  navbarMenuLeft,
  navbarMenuRight,
  navbarMenuHamburger,
  ctaCards,
  teamCard,
  resourcesCards,
};
