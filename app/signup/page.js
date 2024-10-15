"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";


const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="mt-20 lg:w-5/12 w-5/6 mx-auto"
    >
      <p className="text-2xl text-center font-bold">Sign <span className="italic text-red-600">Up</span></p>
      <div className="mt-10">
        <div className="flex gap-5">
          <input
            className="border-b border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
            type="text"
            id="firstname"
            placeholder="First Name"
            name="firstname"
            // value={firstname}
            // onChange={(e) => setfirstname(e.target.value)}
            required
          />

          <input
            className="border-b border-red-600 shadow-sm px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
            type="text"
            id="lastname"
            placeholder="Last Name"
            name="lastname"
            // value={lastname}
            // onChange={(e) => setlastname(e.target.value)}
            required
          />
        </div>
        

        <input
          className="border-b border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          required
        />

<input
          className="border-b border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="number"
          id="phone"
          placeholder="Phone Number"

          name="phone"
          //   value={email}
          //   onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="border-b border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          //   value={password}
          //   onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="-mt-2 flex justify-end">
          <Link href="/signin"><p className="hover:underline text-sm">
            Already have an account? Sign in
            
          </p></Link>
        </div>
        <div className="flex justify-center">
          <Link href="/user"><motion.p
            whileTap={{ scale: 0.7 }}
            className="px-7 py-3 mt-7 bg-white flex font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
          >
            Sign up <IoMdArrowDropright className="text-red-600" />
          </motion.p></Link>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </motion.div>
  );
};

export default page;
