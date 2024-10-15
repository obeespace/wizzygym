import React from 'react'
import { MdOutlineCardMembership } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import { WiSunrise } from "react-icons/wi";
import { PiBowlFood } from "react-icons/pi";
import { IoMdFitness } from "react-icons/io";
import { WiDaySunny } from "react-icons/wi";
import { TiWeatherNight } from "react-icons/ti";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { LuMoreVertical } from "react-icons/lu";
import { IoMdArrowDropright } from "react-icons/io";


const page = () => {
  return (
    <div className="w-5/6 mx-auto mt-10">
        <div className="lg:flex gap-5">
        <div className="">
          <p className="text-3xl font-semibold">
            <span className="italic text-red-600">Hi</span>, User
          </p>
          <p className="text-sm">Lets look at your data</p>
          <div className="mt-7 flex lg:gap-5 gap-2">
            <div className="rounded-xl shadow-sm px-3 py-5 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <MdOutlineCardMembership className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4 text-green-600">Active</p>
              <p className="text-sm">subscription Status</p>
              <p className="text-green-600 mt-4">30 days</p>
            </div>

            <div className="rounded-xl shadow-sm px-3 py-5 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <HiStatusOnline className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4">Wisdom</p>
              <p className="text-sm">Assigned Trainer</p>
              <p className="text-red-600 mt-4">change</p>
            </div>

            <div className="rounded-xl shadow-sm  px-3 py-5 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <IoMdFitness className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4">Weight Loss</p>
              <p className="text-sm">Major fitness/body Goals</p>
              <p className="text-green-600 mt-4 hover:underline cursor-pointer flex items-center">see more <IoMdArrowDropright className="text-red-600"/></p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border lg:w-3/12 mt-10 lg:mt-0 px-4 py-4 border-gray-600 bg-gray-950">
          <div className="border-b border-red-800 pb-3 flex justify-between items-center">
            <div className="bg-white rounded-full px-1 py-1">
              <PiBowlFood className="text-black" />
            </div>

            <p>Meal Plans</p>
            <LuMoreVertical className="cursor-pointer" />
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
          <div className="border-b border-red-800 pb-3 flex justify-between items-center">
            <div className="bg-white rounded-full px-1 py-1">
              <IoMdFitness className="text-black" />
            </div>
            <p>Work-Out Plans</p>
            <LuMoreVertical />
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
    </div>
  )
}

export default page