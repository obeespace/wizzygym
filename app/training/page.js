"use client";
import Image from "next/image";
import React from "react";
import trainingmain from "../image/maintrainingpic.jpg";
import trainingimg from "../image/training2.png";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";
import monday from "../image/monday.jpg";
import tuesday from "../image/tuesday.jpg";
import wednesday from "../image/wednesday.jpg";
import thursday from "../image/thursday.jpg";

const page = () => {
  return (
    <main className="w-5/6 mx-auto lg:my-20 my-10">
      <div className="lg:flex gap-20">
        <p className="lg:text-6xl text-5xl font-black lg:w-4/6 w-full">
          Quick guide to our training{" "}
          <span className="italic text-red-600">sessions</span>
        </p>
        <div className="mt-8 lg:mt-0">
          <p>
            Success isn't always about greatness. It's about consistency.
            Consistent hard work gains success
          </p>
          <div className="flex items-center gap-8 mt-5">
            <motion.a
              whileTap={{ scale: 0.7 }}
              href="/signin"
              className="px-7 py-3 bg-white flex font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
            >
              Sign in <IoMdArrowDropright className="text-red-600" />
            </motion.a>
            <p className="text-xs md:text-sm italic w-3/6 md:w-4/6">
              "Elevate Your Fitness Game, Become your best version, Find your
              power and Transform Sweat into Strength.
            </p>
          </div>
        </div>
      </div>

      <Image
        src={trainingmain}
        className="rounded-2xl mt-10 shadow-gray-700 shadow-sm"
      />

      <p className="text-center text-2xl lg:text-4xl lg:w-4/6 mx-auto font-semibold my-20 lg:my-32">
        We offer more than{" "}
        <span className="text-red-600">20 fittness plans</span> tailored to your
        desire, below is a general <span className="text-red-600">taste</span>{" "}
        of what we offer
      </p>

      <div className="">
        <div>
          <div className="lg:grid grid-cols-2 gap-20 items-center my-28">
            <Image src={monday} className="rounded-2xl " />
            <div className="w-5/6 mt-10 lg:mt-0">
              <p className="font-bold text-xl">Monday</p>
              <hr className="mb-3" />
              <p className="font-semibold">
                <span className="italic text-red-600">Men:</span> Arm & Chest
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Focus on upper body strength and muscle definition.</p>
                <p>
                  Targets biceps, triceps, chest muscles with a mix of push and
                  curl movements.
                </p>
                <p>Ideal for hypertrophy and upper-body aesthetics.</p>
              </div>
              <p className="mt-5 font-semibold">
                <span className="italic text-red-600">Women:</span> Glutes +
                Core Strength
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Focus on activating and strengthening glutes.</p>
                <p>Core engagement for better posture and waist shaping.</p>
                <p>Great for building lower-body tone and core stability.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end my-28"><div className="lg:grid grid-cols-2 gap-20">
            <Image
              src={tuesday}
              className="rounded-2xl mt-10 lg:mt-0 order-1 shadow-sm shadow-gray-700"
            />
            <div className="w-5/6 flex flex-col text-right mt-10 lg:mt-0">
              <p className="font-bold text-xl">Tuesday</p>
              <hr className="mb-3" />
              <p className="font-semibold">
                <span className="italic text-red-600">Men:</span> Shoulders &
                Back
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Builds upper body width and posture.</p>
                <p>
                  Targets delts, traps, lats, and rhomboids with pulling and
                  overhead movements.
                </p>
                <p>Supports improved strength and posture.</p>
              </div>
              <p className="mt-5 font-semibold">
                <span className="italic text-red-600">Women:</span> Full Body
                Tone (Upper Focus)
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>
                  Light-to-moderate resistance training for arms, shoulders, and
                  back.
                </p>
                <p>Emphasizes lean muscle tone and calorie burning.</p>
                <p>Supports posture, strength, and fat loss.</p>
              </div>
            </div>
          </div></div>

          <div className="lg:grid grid-cols-2 gap-20 items-center my-28">
            <Image src={wednesday} className="rounded-2xl mt-10 lg:mt-0" />
            <div className="w-5/6 mx-auto text-center mt-10 lg:mt-0">
              <p className="font-bold text-xl">Wednesday</p>
              <hr className="mb-3" />
              <p className="font-semibold">
                <span className="italic text-red-600">Men:</span> Legs & Abs
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Builds strength in quads, hamstrings, glutes, and calves.</p>
                <p>Abs work enhances core power and aesthetics.</p>
                <p>Essential for balance and full-body development.</p>
              </div>
              <p className="mt-5 font-semibold">
                <span className="italic text-red-600">Women:</span> Legs & Core
                Stability
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Focus on sculpting thighs, glutes, and hamstrings.</p>
                <p>Great for joint health, functional strength, and posture.</p>
                <p>Moderate core involvement for balance and tone.</p>
              </div>
            </div>
          </div>

          <div className="lg:grid grid-cols-2 gap-20 items-center my-20">
            <Image
              src={thursday}
              className="rounded-2xl mt-10 lg:mt-0 order-1"
            />
            <div className="w-5/6 mx-auto text-center mt-10 lg:mt-0">
              <p className="font-bold text-xl">Thursday</p>
              <hr className="mb-3" />
              <p className="font-semibold">
                <span className="italic text-red-600">Men:</span> Arm & Chest
                (Hypertrophy Focus)
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Higher volume to build size and muscle endurance.</p>
                <p>Builds muscle endurance and definition in arms and chest.</p>
                <p>
                  Targets chest and arms with variation in tempo and angles.
                </p>
              </div>
              <p className="mt-5 font-semibold">
                <span className="italic text-red-600">Women:</span> Functional
                Strength + Mobility
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>
                  Circuit-based training using bodyweight, kettlebells,
                  resistance bands.
                </p>
                <p>Emphasizes lean muscle tone and calorie burning.</p>
                <p>
                  Promotes strength, flexibility, and movement control for
                  everyday fitness.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:grid grid-cols-2 items-center my-20">
            <Image src={trainingimg} className="rounded-lg mt-10 lg:mt-0" />
            <div className="w-5/6 mx-auto text-center mt-10 lg:mt-0">
              <p className="font-bold text-xl">Friday</p>
              <hr className="mb-3" />
              <p className="font-semibold">
                <span className="italic text-red-600">Men:</span> Shoulders &
                Back (Power Focus)
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Heavier lifts and compound moves.</p>
                <p>Focus on strength, posture, and upper body performance.</p>
                <p>Builds size, symmetry, and control.</p>
              </div>
              <p className="mt-5 font-semibold">
                <span className="italic text-red-600">Women:</span> Full Body
                Conditioning + Core Burn
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>
                  Blends full-body movement patterns with focused core work.
                </p>
                <p>Ideal for fat loss, agility, and core strength.</p>
                <p>High-energy end to the week.</p>
              </div>
            </div>
          </div>

          <div className="lg:grid grid-cols-2 gap-20 items-center my-20">
            <Image
              src={trainingimg}
              className="rounded-lg mt-10 lg:mt-0 order-1"
            />
            <div className="w-5/6 mx-auto text-center mt-10 lg:mt-0">
              <p className="font-bold text-xl">Saturday</p>
              <hr className="mb-3" />
              <p className="font-semibold">
                <span className="italic text-red-600">Men:</span> Legs & Abs
                (Endurance + Strength)
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>
                  Combination of resistance and bodyweight leg exercises with
                  core finishers.
                </p>
                <p>Emphasis on control and stamina.</p>
                <p>Adds core-intensive exercises for full engagement.</p>
              </div>
              <p className="mt-5 font-semibold">
                <span className="italic text-red-600">Women:</span> Lower Body
                Power + Cardio Intervals
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>
                  Legs and glutes work mixed with cardio intervals (e.g., bike,
                  sled, treadmill).
                </p>
                <p>Burns calories while building lower body strength.</p>
                <p>Focus on glute-isolation and high-rep ab circuits.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
