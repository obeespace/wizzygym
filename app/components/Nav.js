"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [makeBold, setMakeBold] = useState(false);
  const pathname = usePathname();
  return (
    <div className="w-5/6 mx-auto py-5">
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center">
        <div className="">
          <Link href="/">
            <h1 className="font-bold text-xl">Wizzy Pro</h1>
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          <Link href="/mission">
            <p
              className={
                pathname === "/mission"
                  ? "border-b-2 border-gray-300 px-1 py-1"
                  : "text-white"
              }
            >
              Mission
            </p>
          </Link>
          <Link href="training">
            <p
              className={
                pathname === "/training"
                  ? "border-b-2 border-gray-300 px-1 py-1"
                  : "text-white"
              }
            >
              Training
            </p>
          </Link>
          <Link href="contact">
            <p
              className={
                pathname === "/contact"
                  ? "border-b-2 border-gray-300 px-1 py-1"
                  : "text-white"
              }
            >
              Contact
            </p>
          </Link>
        </div>
        <motion.p
          whileTap={{ scale: 0.7 }}
          onClick={() => setMakeBold(false)}
          className="px-5 py-1 bg-white text-black rounded-3xl cursor-pointer"
        >
          Log In
        </motion.p>
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center justify-between">
        <div className="">
          <Link href="/">
            <h1 className="font-bold text-xl">Wizzy Pro</h1>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            {toggleMenu ? (
              <motion.p whileTap={{ scale: 0.7 }}>
                <IoMdClose
                  className="text-3xl text-white cursor-pointer"
                  onClick={() => setToggleMenu((prev) => !prev)}
                />
              </motion.p>
            ) : (
              <motion.p whileTap={{ scale: 0.7 }}>
                <GiHamburgerMenu
                  className="text-xl cursor-pointer text-white"
                  onClick={() => setToggleMenu((prev) => !prev)}
                />
              </motion.p>
            )}
          </div>
        </div>
        {toggleMenu && (
          <div className="bg-green-50 z-50 text-gray-700 h-max w-40 absolute top-20 right-8 py-4 rounded-xl shadow-md">
            <div className="flex flex-col gap-3 items-center w-5/6 mx-auto text-lg font-semibold ">
              <Link
                href="/mission"
                className="hover:bg-gray-700 hover:text-white w-full text-center rounded-md"
              >
                <p
                  className="px-3 py-2"
                  onClick={() => setToggleMenu((prev) => !prev)}
                >
                  Mission
                </p>
              </Link>
              <Link
                href="/training"
                className="hover:bg-gray-700 w-full hover:text-white text-center rounded-md"
              >
                <p
                  className=" hover:border-green-700 px-3 py-2"
                  onClick={() => setToggleMenu((prev) => !prev)}
                >
                  Training
                </p>
              </Link>
              <Link
                href="/contact"
                className="hover:bg-gray-700 w-full hover:text-white text-center rounded-md"
              >
                <p
                  className="px-3 py-2"
                  onClick={() => setToggleMenu((prev) => !prev)}
                >
                  Contact
                </p>
              </Link>
              <Link
                href="/"
                className="hover:bg-gray-700 hover:text-white w-full text-center rounded-md"
              >
                <p
                  className="px-3 py-2"
                  onClick={() => setToggleMenu((prev) => !prev)}
                >
                  Sign in
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
