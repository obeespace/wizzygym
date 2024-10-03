"use client"
import React from 'react'
import { motion } from "framer-motion"
import { IoMdArrowDropright } from "react-icons/io";
import Link from 'next/link';


const page = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.9 }} className="mt-32 lg:w-4/12 w-5/6 mx-auto">
      <p className="text-2xl text-center font-bold">Sign <span className='italic text-red-600'>In</span></p>
      <div className="mt-10">
        <input
          className="border-b border-white px-3 py-1 w-full mb-5 rounded-md"
          type="email"
          id="email"
          placeholder="Email"
          name="email"
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          className="border-b border-white px-3 py-1 w-full mb-5 rounded-md"
          type="password"
          id="password"
          placeholder="Password"
          name="password"
        //   value={password}
        //   onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className='flex justify-between text-sm -mt-2'>
        <p>Forget Password?</p>
        <Link href='/signup'><p className='hover:underline'>New?..Sign up</p></Link>
        </div>

        <div className="flex justify-center">
        <motion.p
          whileTap={{ scale: 0.7 }}
          className="px-5 py-2 mt-4 bg-white flex font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
        >
          Sign in <IoMdArrowDropright className="text-red-600"/>
        </motion.p>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </motion.div>
  )
}

export default page