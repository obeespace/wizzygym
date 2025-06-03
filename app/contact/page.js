"use client";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import contact from "../image/contact.jpg";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { GiRotaryPhone } from "react-icons/gi";
import FloatingSocials from "../components/FloatingSocials";

const page = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7rfdysx",
        "template_a2kcvvb",
        e.target,
        "E_sBA160DotyE3DqV"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          toast.error("Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <div className="w-5/6 mx-auto lg:my-20 my-10">
      <Toaster position="top-right" richColors />
      <div className="lg:flex gap-20">
        <p className="lg:text-6xl text-5xl font-black lg:w-4/6 w-full">
          Kindly leave a <span className="italic text-red-600">message</span>{" "}
        </p>
        <div className="mt-8 lg:mt-0">
          <p>
            No 1 gadastran plaza, block A downstairs, shop 2, opposite the Main
            mosque, Kubwa, FCT
          </p>
          <div className="flex items-center gap-3 mt-5">
            <a
              href="https://github.com/obeespace"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-black rounded-full p-3 hover:bg-gray-100"
            >
              <FaGithub
                size={24}
                className="text-gray-800 hover:text-gray-900"
              />
            </a>
            <a
              href="https://instagram.com/0beenna"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-black rounded-full p-3 hover:bg-gray-100"
            >
              <FaInstagram
                size={24}
                className="text-pink-500 hover:text-pink-700"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/obinna-ugwu-04b0a617b/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white shadow-black rounded-full p-3 hover:bg-gray-100"
            >
              <FaTiktok size={24} className="text-black hover:text-blue-900" />
            </a>
            
          </div>
        </div>
      </div>

      <Image src={contact} alt="" className="rounded-2xl mt-10 scale-x-[-1]" />

      <div className="mt-16 lg:mt-20 lg:flex justify-around items-center gap-20">
        <div className="lg:w-5/12 text-center">
          <h2 className="lg:text-4xl text-3xl lg:font-bold font-black">
            Lets be part of your{" "}
            <span className="text-red-600">fitness journey</span>
          </h2>
          <h4 className="mt-3">
            You don’t have to be great to start, but you have to start to be
            great. Together, we can achieve anything
          </h4>
          <p className="mt-3 font-semibold text-lg">+2348164240480</p>
        </div>
        <div className="lg:mt-10 mt-16 text-black lg:">
          <form id="nameForm" onSubmit={sendEmail}>
            <input
              className="border-b border-black px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
              type="text"
              id="name"
              placeholder="Enter your name"
              name="name"
              required
            />
            <input
              className="border-b border-black px-3 py-1 w-full mb-5 lg:mb-0 rounded-md placeholder:text-gray-400 outline-none"
              type="email"
              placeholder="Enter your email address"
              name="email"
              required
            />
            <br />
            <br />
            <textarea
              className="w-full px-3 py-1 border-b border-black mt-2 lg:mt-5 rounded-md placeholder:text-gray-400 outline-none"
              cols="20"
              rows="6"
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>
            <div className="flex justify-center mt-4">
              <motion.button
                whileTap={{ scale: 0.7 }}
                className="px-5 py-2 bg-white flex w-fit font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
              >
                Send Message <IoMdArrowDropright className="text-red-600" />
              </motion.button>
            </div>
          </form>
        </div>
      </div>
      <FloatingSocials />
    </div>
  );
};

export default page;
