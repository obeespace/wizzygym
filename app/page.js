"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import icon1 from "./image/icon1.png";
import icon2 from "./image/icon2.png";
import icon3 from "./image/icon3.png";
import landingpic from "./image/landingimage4.jpg";
import landingimage from "./image/landingimage.jpg";
import { IoMdArrowDropright } from "react-icons/io";

export default function Home() {
  return (
    <main className="w-5/6 mx-auto">
      <section className="lg:mt-20 mt-10">
        <div className="lg:flex justify-between gap-20 ">
          <p className="lg:text-8xl text-5xl font-black lg:w-4/6 w-full">
            Step Up Your <span className="italic text-red-600">Fitness</span> Bod in Time
          </p>
          <div className="mt-10 lg:mt-0 lg:w-5/12">
            <p className="">
              Tranformation begins from within and we here at Wizzy pro have the
              right tool to tilt your mind to see the positives of a great well
              being
            </p>
            <div className="flex justify-between mt-10 gap-7">
              <div className="flex ">
                <Image
                  src={icon1}
                  alt="icon image 1"
                  className="rounded-full border-2 border-white -ml-2 h-12 w-20"
                />
                <Image
                  src={icon2}
                  alt="icon image 2 "
                  className="rounded-full border-2 border-white -ml-2 h-12 w-20"
                />
                <Image
                  src={icon3}
                  alt="icon image 3"
                  className="rounded-full border-2 border-white -ml-2 h-12 w-20"
                />
              </div>
              <p className="text-sm text-gray-200">
                We have a track record of having transformed the lives of 3000
                people
              </p>
            </div>
          </div>
        </div>
        <Image
          src={landingpic}
          alt="image 1"
          className="mt-20 w-full rounded-3xl"
        />
      </section>

      <section className="lg:mt-40 mt-20">
        <h1 className="text-center text-2xl lg:text-4xl lg:w-4/6 mx-auto font-semibold">
          Fitness starts in your head. You must choose to eat clean, <span className="text-red-600 italic">exercise
          regularly</span>, and treat your body with respect
        </h1>
        <div className="lg:grid grid-cols-2 items-center gap-20 lg:mt-32 mt-20">
          <Image
            src={landingimage}
            alt="gymnists holding hands"
            className="rounded-3xl"
          />
          <div className="mt-14 lg:mt-0">
            <p className="text-2xl font-semibold w-9/12">
              Struggling to get the right fitness state of mind?
            </p>
            <p className="mt-5 text-gray-200">
              Set a timer for your sets or use interval training apps that
              signal when to switch exercises. This keeps you aware of time and
              eliminates distractions.
            </p>
            <p className="mt-5 text-gray-200">
              Having a workout plan prevents aimlessness. Follow a
              well-organized routine, knowing exactly which exercises, sets, and
              reps you will perform.
            </p>
            <p className="mt-5 text-gray-200">
              Having someone to keep you accountable can increase focus. They
              can remind you of your form and encourage you to push through
              tough sets.
            </p>
            <div className="w-full mt-5"><motion.button
              whileTap={{ scale: 0.7 }}
              onClick={() => setMakeBold(false)}
              className="px-5 py-2 font-semibold flex items-center gap-1 bg-white text-black rounded-xl cursor-pointer"
            >
              Learn More <IoMdArrowDropright className="text-red-600"/>
            </motion.button>
            </div>
          </div>
        </div>
      </section>

      <section className="lg:mt-40 mt-20">
        <p className="text-4xl font-bold">Personalized fitness classes <br/> for all <span className="text-red-600 italic">body goals</span></p>
      </section>
    </main>
  );
}
