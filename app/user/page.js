'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCardMembership } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import { WiSunrise } from "react-icons/wi";
import { PiBowlFood } from "react-icons/pi";
import { IoMdFitness } from "react-icons/io";
import { WiDaySunny } from "react-icons/wi";
import { TiWeatherNight } from "react-icons/ti";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { RiProfileLine } from "react-icons/ri";
import { LuMoreVertical } from "react-icons/lu";
import { IoMdArrowDropright } from "react-icons/io";
import { IoCardOutline } from "react-icons/io5";


const page = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="w-5/6 mx-auto mt-10">
      <div className="lg:flex gap-5">
        <div className="">
          <p className="text-3xl font-semibold">
            <span className="italic text-red-600">Hi</span>, User
          </p>
          <p className="text-sm">Lets look at your data</p>
          <div className="mt-7 lg:flex lg:gap-5 gap-2">
            <div className="rounded-xl shadow-sm lg:px-3 px-5 py-5 mb-3 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <MdOutlineCardMembership className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4 text-green-600">
                Active
              </p>
              <div className="flex lg:block justify-between items-center">
                <p className="text-sm">Subscription status</p>
                <p className="text-green-600 lg:mt-4 mt-0">See Plans</p>
              </div>
            </div>

            <div className="rounded-xl shadow-sm lg:px-3 px-5 py-5 mb-3 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <HiStatusOnline className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4">Wisdom</p>
              <div className="flex lg:block justify-between items-center">
                <p className="text-sm">Assigned trainer</p>
                <p className="text-red-600 lg:mt-4 mt-0">change Trainer</p>
              </div>
            </div>

            <div className="rounded-xl shadow-sm lg:px-3 px-5 py-5 mb-3 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <IoMdFitness className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4">Weight Loss</p>
              <p className="text-sm">Major fitness/body Goals</p>
              <div></div>
              <p className="text-green-600 mt-4 hover:underline cursor-pointer flex items-center">
                see more <IoMdArrowDropright className="text-red-600" />
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border lg:w-3/12 mt-10 lg:mt-0 px-4 py-4 border-gray-600 bg-gray-950">
          <div className="border-b border-red-800 pb-3 flex gap-3 items-center">
            <div className="bg-white rounded-full px-1 py-1">
              <PiBowlFood className="text-black" />
            </div>

            <p>Meal Plans</p>
          </div>
          <div className="mt-5">
            <div className="flex gap-3">
              <div className="bg-white rounded-full px-1 py-1">
                <WiSunrise className="text-black" />
              </div>

              <p>Bread and goatmeat sauce</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-3">
              <div className="bg-white rounded-full px-1 py-1">
                <WiDaySunnyOvercast className="text-black" />
              </div>
              <p>Smoothie and bean cake</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-3">
              <div className="bg-white rounded-full px-1 py-1">
                <WiDaySunny className="text-black" />
              </div>
              <p>Okra Soup and Ice cream</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-3">
              <div className="bg-white rounded-full px-1 py-1">
                <TiWeatherNight className="text-black" />
              </div>
              <p>Green Tea and liver bread</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border lg:w-3/12 mt-10 lg:mt-0 px-4 py-4 border-gray-600 bg-gray-950">
          <div className="border-b border-red-800 pb-3 flex gap-3 items-center">
            <div className="bg-white rounded-full px-1 py-1">
              <IoMdFitness className="text-black" />
            </div>
            <p>Work-Out Plans</p>
          </div>

          <div className="mt-3 flex gap-3 items-center">
            <div className="px-6 py-5 border bg-white text-black rounded-full w-fit">
              <p>09</p>
            </div>
            <div>
              <p className="text-sm">Thurs | Sept</p>
              <p className="text-lg font-semibold -mt-1">Leg Day</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="">
              {/* <div className="bg-white rounded-full px-1 py-1">
                <TiWeatherNight className="text-black" />
              </div> */}
              <p className="text-right">Jumping Jacks x3</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="">
              {/* <div className="bg-white rounded-full px-1 py-1">
                <TiWeatherNight className="text-black" />
              </div> */}
              <p className="text-right">Bench Press x5</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="">
              {/* <div className="bg-white rounded-full px-1 py-1">
                <TiWeatherNight className="text-black" />
              </div> */}
              <p className="text-right">High Press Squats x10</p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-5">
        <div className="lg:mt-4 mt-10 lg:w-4/12">
          <p className="text-2xl font-semibold">
            My <span className="text-red-600 italic">Details</span>
          </p>

          <div className="rounded-xl border mt-5 px-4 py-4 border-gray-600 ">
            <div className="border-b border-red-800 pb-3 flex justify-between items-center">
              <div className="flex justify-between gap-3">
                <div className="bg-white rounded-full px-1 py-1">
                  <RiProfileLine className="text-black" />
                </div>

                <p className="font-semibold">Wisdom Ojong</p>
              </div>
              <div className="">
                {toggleMenu ? (
                  <motion.p whileTap={{ scale: 0.7 }}>
                    <IoMdClose
                      className="text-xl text-white cursor-pointer"
                      onClick={() => setToggleMenu((prev) => !prev)}
                    />
                  </motion.p>
                ) : (
                  <motion.p whileTap={{ scale: 0.7 }}>
                    <LuMoreVertical
                      className="text-xl cursor-pointer text-white"
                      onClick={() => setToggleMenu((prev) => !prev)}
                    />
                  </motion.p>
                )}
              </div>
              {toggleMenu && (
          <div className="bg-white z-50 text-gray-900 h-max w-40 absolute top-20 right-8 py-4 rounded-xl shadow-md">
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
              
            </div>
          </div>
        )}
            </div>

            <div className="mt-5">
              <div className="flex gap-3">
                <div className="bg-white rounded-full px-1 py-1">
                  <WiSunrise className="text-black" />
                </div>

                <p>wizdomuyhh@gmail.com</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex gap-3">
                <div className="bg-white rounded-full px-1 py-1">
                  <WiDaySunnyOvercast className="text-black" />
                </div>
                <p>6755543324689</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex gap-3">
                <div className="bg-white rounded-full px-1 py-1">
                  <WiDaySunny className="text-black" />
                </div>
                <p>*****************</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex gap-3">
                <div className="bg-white rounded-full px-1 py-1">
                  <TiWeatherNight className="text-black" />
                </div>
                <p>17th November, 2024</p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border lg:w-4/12 mt-5  border-gray-600">
          <div className="bg-gray-950 shadow-gray-600 shadow-md rounded-xl px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full px-1 py-1">
                <IoCardOutline className="text-black" />
              </div>
              <p>Payment Card</p>
            </div>
            <p className="font-semibold text-2xl mt-5 text-center">
              5562 xxxx xxxx xxxx
            </p>
            <div className="flex justify-end items-center mt-5">
              <p className="flex gap-2">Buy Plan</p>
              <IoMdArrowDropright className="text-red-700" />
            </div>
          </div>

          <div className="px-4 py-3">
            <p className="my-2 border-b border-red-600 w-fi">Previous Plans</p>
            <div className="flex justify-between">
              <p>30 Days</p>
              <p>N20,000</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>1 Day</p>
              <p>N2,000</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>7 Days</p>
              <p>N8,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
