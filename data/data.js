import React from "react";

// react-icons

import { BsXDiamondFill, BsFillPersonVcardFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import { AiFillProject } from "react-icons/ai";
import { MdOutlineContactMail } from "react-icons/md";
import { GrLinkedin, GrGithub, GrInstagram } from "react-icons/gr";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiGraphql,
  SiApollographql,
  SiMongodb,
  SiPostgresql,
  SiAmazonaws,
  SiDocker,
  SiJest,
  SiCypress,
  SiMocha,
  SiGithubactions,
  SiTravisci,
  SiGithub,
} from "react-icons/si";

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



// Social Media Icons

const socialIcons = [
  {
    icon: <GrLinkedin className="text-[#5fefd0]  " />,
    url: "https://www.linkedin.com/in/tristan-onfroy/",
  },
  {
    icon: <GrGithub className="text-[#5fefd0] " />,
    url: "https://github.com/TristanO45",
  },
  {
    icon: <GrInstagram className="text-[#5fefd0] " />,
    url: "https://www.instagram.com/tristan.vision/",
  },
];

// Projects

const ctaCards = [
  {
    desc: "Request an Appointment",
    imgUrl: "/RequestApt.jpg",
  },
  {
    desc: "Explore Our Services",
    imgUrl: "/ExploreServices.jpg",
  },
  {
    title: "HomeGrub",
    desc: "Online marketplace to order homemade meals",
    stack:
      "Javascript, React, CSS, MUI, Node, Express, Cypress.io, PostgreSQL, Stripe API",
    gitHubUrl: {
      url: "https://github.com/TristanO45/HomeGrub",
      icon: <SiGithub size="2rem" />,
    },
    website: {
      url: "",
      icon: "",
    },
    imgUrl: "/HomeGrub.png",
  },
];

// Tech Stack icons

const techStack = [
  {
    icon: <SiJavascript size="3rem" className="z-10" />,
    text: "Javascript",
    url: "temp",
  },
  {
    icon: <SiTypescript size="3rem" className="z-10" />,
    text: "Typescript",
    url: "temp",
  },
  {
    icon: <SiReact size="3rem" className="z-10" />,
    text: "React",
    url: "temp",
  },
  {
    icon: <SiRedux size="3rem" className="z-10" />,
    text: "Redux",
    url: "temp",
  },
  {
    icon: <SiNextdotjs size="3rem" className="z-10" />,
    text: "NextJS",
    url: "temp",
  },
  {
    icon: <SiHtml5 size="3rem" className="z-10" />,
    text: "HTML",
    url: "temp",
  },
  {
    icon: <SiCss3 size="3rem" className="z-10" />,
    text: "CSS",
    url: "temp",
  },
  {
    icon: <SiTailwindcss size="3rem" className="z-10" />,
    text: "Tailwind CSS7",
    url: "temp",
  },
  {
    icon: <SiNodedotjs size="3rem" className="z-10" />,
    text: "Node",
    url: "temp",
  },
  {
    icon: <SiExpress size="3rem" className="z-10" />,
    text: "Express JS",
    url: "temp",
  },
  {
    icon: <SiGraphql size="3rem" className="z-10" />,
    text: "GraphQL",
    url: "temp",
  },
  {
    icon: <SiApollographql size="3rem" className="z-10" />,
    text: "Apollo",
    url: "temp",
  },
  {
    icon: <SiMongodb size="3rem" className="z-10" />,
    text: "MongoDB",
    url: "temp",
  },
  {
    icon: <SiPostgresql size="3rem" className="z-10" />,
    text: "PostgreSQL",
    url: "temp",
  },
  {
    icon: <SiAmazonaws size="3rem" className="z-10" />,
    text: "AWS",
    url: "temp",
  },
  {
    icon: <SiDocker size="3rem" className="z-10" />,
    text: "Docker",
    url: "temp",
  },
  {
    icon: <SiJest size="3rem" className="z-10" />,
    text: "Jest",
    url: "temp",
  },
  {
    icon: <SiCypress size="3rem" className="z-10" />,
    text: "Cypress",
    url: "temp",
  },
  {
    icon: <SiGithubactions size="3rem" className="z-10" />,
    text: "GitHub Actions",
    url: "temp",
  },
  {
    icon: <SiTravisci size="3rem" className="z-10" />,
    text: "Travis CI",
    url: "temp",
  },
];

export { navbarMenuLeft, navbarMenuRight, navbarMenuHamburger, socialIcons, techStack, ctaCards };
