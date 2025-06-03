"use client";
import Image from "next/image";
import { Toaster, toast } from "sonner";
import React from "react";
import { IoMdArrowDropright } from "react-icons/io";
import contactimg from "../image/contactus.jpg";
import { motion } from "framer-motion";
// import FloatingSocials from "../component/FloatingSocials";
import emailjs from "@emailjs/browser";
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
    <div className="w-9/12 lg:flex justify-between items-center mx-auto text-center my-10">
        <Toaster position="top-right" richColors />
      <div className="lg:w-5/12">
        <div className="flex justify-center mb-3">
          <Image src={contactimg} alt="man on phone" className="h-32 w-32 rounded-full" />
        </div>
        <h2 className="lg:text-4xl text-3xl lg:font-bold font-black">
          Lets Collaborate on your Next project
        </h2>
        <h4 className="mt-3 text-lg">
          You have seen what I do, Now lets talk about you and that amazing idea you have.
        </h4>
        <p className="mt-3">+2348164240480</p>
      </div>
      <div className="lg:mt-10 mt-16">
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
            <motion.button whileTap={{ scale: 0.7 }} className="w-fit rounded-xl px-4 py-2 flex items-center gap-1 text-black hover:bg-gray-700 cursor-pointer">
              Send Message <IoMdArrowDropright />
            </motion.button>
          </div>
        </form>
      </div>
      <FloatingSocials />
    </div>
  );
};

export default page;