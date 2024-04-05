import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";

function ContactForm(props) {
  // States for contact form fields
  const [fullname, setFullname] = useState("");
  const [pronouns, setPronouns] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [referred, setReferred] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");

  // Form validation state
  const [errors, setErrors] = useState({});

  // Setting button text
  const [buttonText, setButtonText] = useState("Send Message");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");

      const serviceID = process.env.SERVICE_ID;
      const templateID = process.env.TEMPLATE_ID;
      const publicKey = process.env.PUBLIC_KEY;

      emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
        (result) => {
          console.log(result.text);
          console.log("email sent successfully");
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
          setButtonText("Send Message");
          setFullname("");
          setPronouns("");
          setDateOfBirth("");
          setEmail("");
          setPhone("");
          setReferred("");
          setDescription("");
          setAvailability("");
        },
        (error) => {
          console.log(error.text);
          if (error) {
            console.log("This is the error I get =>", error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText("Send Message");
            setFullname("");
            setPronouns("");
            setDateOfBirth("");
            setEmail("");
            setPhone("");
            setReferred("");
            setDescription("");
            setAvailability("");
            return;
          }
        }
      );
    }
  };

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (dateOfBirth.length <= 0) {
      tempErrors["dateOfBirth"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (phone.length <= 0) {
      tempErrors["phone"] = true;
      isValid = false;
    }
    if (referred.length <= 0) {
      tempErrors["referred"] = true;
      isValid = false;
    }
    if (description.length <= 0) {
      tempErrors["description"] = true;
      isValid = false;
    }
    if (availability.length <= 0) {
      tempErrors["availablity"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("valid form errors", errors);
    return isValid;
  };

  return (
    <section className="mt-[35vh] sm:mt-[35vh] pb-10" id={props.id}>
      <div className="flex flex-col items-center">
        <div className="w-full flex flex-col px-4 justify-center">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="flex flex-col gap-4 pb-5">
              <div className="flex flex-col-2 gap-4">
                <div className="flex flex-col w-full max-w-md">
                  <label className="text-black">Full Name</label>
                  <input
                    type="text"
                    name="full_name"
                    value={fullname}
                    required
                    onChange={(e) => {
                      setFullname(e.target.value);
                    }}
                    className="w-full border border-black rounded-sm bg-transparent py-2 px-4 focus:outline-none focus:rounded-lg focus:ring-1 ring-[#333a29] font-normal text-black text-lg"
                  />
                </div>
                <div className="flex flex-col w-full max-w-md">
                  <label className="text-black">Pronouns</label>
                  <input
                    type="text"
                    name="user_pronouns"
                    value={pronouns}
                    onChange={(e) => {
                      setPronouns(e.target.value);
                    }}
                    className="w-full border border-black rounded-sm bg-transparent py-2 px-4 focus:outline-none focus:rounded-lg focus:ring-1 ring-[#333a29] font-normal text-black text-lg"
                  />
                </div>
              </div>
              <div className="flex flex-col w-full max-w-[50%]">
                <label className="text-black">Date of Birth</label>
                <span>(Some therapist don't see minors.)</span>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={dateOfBirth}
                  onChange={(e) => {
                    setDateOfBirth(e.target.value);
                  }}
                  required
                  className="w-full border border-black rounded-sm bg-transparent py-2 px-4 focus:outline-none focus:rounded-lg focus:ring-1 ring-[#333a29] font-normal text-black text-lg"
                />
              </div>
              <div className="flex flex-col w-full max-w-full">
                <label className="text-black">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  className="w-full border border-black rounded-sm bg-transparent py-2 px-4 focus:outline-none focus:rounded-lg focus:ring-1 ring-[#333a29] font-normal text-black text-lg"
                />
              </div>
              <div className="flex flex-col w-full max-w-full">
                <label className="text-black">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  required
                  className="w-full border border-black rounded-sm bg-transparent py-2 px-4 focus:outline-none focus:rounded-lg focus:ring-1 ring-[#333a29] font-normal text-black text-lg"
                />
              </div>
              <div className="flex flex-col w-full max-w-full">
                <label className="text-black">How Did You Hear About Us?</label>
                <input
                  type="text"
                  name="referred"
                  value={referred}
                  onChange={(e) => {
                    setReferred(e.target.value);
                  }}
                  className="w-full border border-black rounded-sm bg-transparent py-2 px-4 focus:outline-none focus:rounded-lg focus:ring-1 ring-[#333a29] font-normal text-black text-lg"
                />
              </div>
              <div className="flex flex-col w-full max-w-full">
                <label className="text-black">
                  Briefly describe what you are hoping to work on in therapy
                </label>
                <textarea
                  name="description"
                  value={description}
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                  required
                  className="w-full border border-black rounded-sm bg-transparent py-2 px-4 focus:outline-none focus:rounded-lg focus:ring-1 ring-[#333a29] font-normal text-black text-lg"
                  rows="5"
                ></textarea>
              </div>
              <div className="flex flex-col w-full max-w-full">
                <label className="text-gray-500">
                  What is your availability for sessions?
                </label>
                <input
                  type="text"
                  name="availability"
                  value={availability}
                  onChange={(e) => {
                    setAvailability(e.target.value);
                  }}
                  className="w-full border border-black rounded-sm bg-transparent py-2 px-4 focus:outline-none focus:rounded-lg focus:ring-1 ring-[#333a29] font-normal text-black text-lg"
                />
              </div>
            </div>
            <div className="mt-5 flex justify-center">
              <button
                type="submit"
                className="relative w-full max-w-md overflow-hidden px-6 sm:px-12 py-1 sm:py-3 text-lg sm:text-xl font-medium text-white bg-[#6A6E59] border border-[#6A6E59] rounded-md shadow-inner group"
              >
                <span className="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-white group-hover:w-full ease"></span>
                <span className="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-white group-hover:w-full ease"></span>
                <span className="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-white group-hover:h-full ease"></span>
                <span className="absolute inset-0 w-full h-full duration-300 delay-300 bg-white opacity-0 group-hover:opacity-100"></span>
                <span className="relative transition-colors duration-300 delay-200 group-hover:text-[#B1BCA0] ease">
                  {buttonText}
                </span>
              </button>
            </div>
            <div className="text-left">
              {showSuccessMessage && (
                <p className="text-green-500 font-semibold text-sm md:text-base my-2">
                  Thankyou! Your Message has been delivered.
                </p>
              )}
              {showFailureMessage && (
                <p className="text-red-500 md:text-base">
                  Oops! Something went wrong, please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
