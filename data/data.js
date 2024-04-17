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
    path: "./teamBio/kristina",
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

const faqData = [
  {
    question: "How do I get started?",
    answer: `When you first contact us, we will set up an initial phone consultation, free of charge. This 10-15 minute conversation allows you to share a summary of your reasons for seeking therapy and allows us to ask pertinent questions to determine if we are the right therapist to help you.
    
    Our first scheduled appointment is usually considered an initial consultation without obligation, in that it gives us a chance to get to know each other a bit, discuss your concerns and goals, and determine how to best proceed.
    
    Sessions are mostly conducted virtually using a secure telehealth platform. Some therapists may have some exceptions and provide in-person appointments.
    
    To schedule a consultation call or initial appointment, please contact us through our contact page or reaching out directly to the therapist you are interested in working with - we do our best to return calls and emails within two business days.`,
  },
  {
    question: "What can I expect in the first session?",
    answer:
      "The initial session is the time for you to start to share your story, talk about your goals and what you would like to change. Another important aspect of the first session is deciding if we are a good fit. We are establishing a relationship that will become the foundation for working together. You will begin to figure out some goals; I will begin to figure out how to help you get there.",
  },
  {
    question: "How much do sessions cost? (updated as of 2024)",
    answer: `<u>Licenced Therapist Rates</u> 
    $200 per 50 minutes (Individual sessions) 
    $225 per 50 minute sessions (Couples sessions) 
    
    <u>Associate Therapist Rates</u>
    $150 per 50 minutes (Individual sessions)
    $175 per 50 minute sessions (Couples sessions)
    
    We offer a sliding scale on a limited basis for those that need it; please contact us to see if these slots are available. We encourage you to communicate openly with your therapist if you require assistance.`,
  },
  {
    question: "What is your cancellation policy",
    answer: `We require 24 hours notice of cancellation or you will need to pay for the appointment. An occasional exception may be made in the case of an emergency. The sooner you let your therapist know of an issue the better.`,
  },
  {
    question: "Do you accept insurance?",
    answer: `No, we do not accept insurance at this time. If you have a PPO type plan and want to submit a claim for out-of-network reimbursement, we can give you a receipt to help facilitate any reimbursement you may be entitled to. It is highly recommended that you check in with your insurance provider to clarify your out-of-network coverage prior to the start of therapy.
    
    Please note that submitting an insurance claim means we may need to give you a mental health diagnosis.
    
    We know navigating health insurance is tricky - we can suggest some helpful questions to ask your insurance carrier if you plan to call.`,
  },
];

export {
  navbarMenuLeft,
  navbarMenuRight,
  navbarMenuHamburger,
  ctaCards,
  teamCard,
  resourcesCards,
  faqData,
};
