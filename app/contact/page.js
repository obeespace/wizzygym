import React from "react";
import {
  BsDribbble,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
import contactimage from "../image/contactimage2.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="w-5/6 mx-auto my-20">
      {/* <div className="lg:w-3/6">
          <p className="mb-2">Contact us</p>
          <p className="text-4xl font-semibold">Let’s Build Something</p>
          <p className="mt-3 text-lg text-gray-700">
            Don’t be shy, say hello! Ready to change the world with your project
            or have questions
          </p>
        </div> */}
      <div className="relative">
        <Image
          src={contactimage}
          className="w-screen rounded-3xl h-80 lg:h-96 lg:object-cover "
        />
        <div
          className="absolute flex flex-col  
            items-center top-0 
            bottom-0 text-center"
        >
          <p className="text-4xl mt-5 lg:text-5xl font-playfair">
          Contact us
          </p>
          <p className="italic mt-5 font-thin text-lg text-center">
          Let’s Build Something
          </p>
          <p className="mt-3 text-lg ">
            Don’t be shy, say hello! Ready to change the world <br/>with your project
            or have questions
          </p>
        </div>
      </div>

      <section className="mt-40 mx-auto w-11/12 lg:flex justify-between">
        <div className="lg:w-5/12">
          <div className="mb-5">
            <p className="mb-2 text-lg font-semibold">Contact Us</p>
            <div className="flex justify-between">
              <p>info@wizzypro.fitness</p>
              {/* <p>(234) 806 314 5125</p> */}
            </div>
          </div>

          <hr className="" />

          <div className="mt-5">
            <p className="mb-4 text-lg font-semibold">Follow us</p>
            <div className="flex gap-14 text-2xl">
              <BsDribbble />
              <BsLinkedin />
              <BsFacebook />
              <BsInstagram />
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-0 lg:w-5/12 mx-auto flex text-black flex-col items-center">
          <div className="w-full justify-between items-center ">
            <input
              placeholder="Name"
              className="border-b border-black px-3 py-1 w-full mb-5 rounded-md  placeholder:text-gray-400 outline-none"
            />
            <input
              placeholder="Email"
              className="border-b border-black px-3 py-1 w-full mb-5 lg:mb-0 rounded-md placeholder:text-gray-400 outline-none"
            />
          </div>
          <textarea
            className="w-full px-3 py-1 border-b border-black mt-2 lg:mt-5 rounded-md  placeholder:text-gray-400 outline-none"
            placeholder="Message"
            rows={5}
          />
          <div className="w-full flex justify-end mt-8">
            <button className="bg-white text-black px-4 hover:bg-gray-900 py-3 rounded-md">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
