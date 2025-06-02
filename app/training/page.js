import Image from "next/image";
import React from "react";
import trainingimg from "../image/training2.png";

const page = () => {
  return (
    <main className="w-5/6 mx-auto my-20">
      <div className="lg:flex gap-20">
        <p className="text-5xl font-black lg:w-4/6 w-full">
          Peep what guides our{" "}
          <span className="italic text-red-600">sessions</span>
        </p>
        <Image src={trainingimg} className="w-3/6 rounded-lg" />
      </div>

      <div className="mt-20">
        <div>
          <div className="lg:grid grid-cols-2 gap-20 items-center my-28">
             <Image src={trainingimg} className="rounded-lg " />
            <div className="w-5/6 mx-auto mt-10 lg:mt-0 text-center">
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

          <div className="lg:grid grid-cols-2 gap-20 items-center my-28">
            <Image
              src={trainingimg}
              className="rounded-lg mt-10 lg:mt-0 order-1"
            />
            <div className="w-5/6 mx-auto text-center mt-10 lg:mt-0">
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
          </div>

          <div className="lg:grid grid-cols-2 gap-20 items-center my-28">
            <Image src={trainingimg} className="rounded-lg mt-10 lg:mt-0" />
            <div className="w-5/6 mx-auto text-center mt-10 lg:mt-0">
              <p className="font-bold text-xl">Wednesday</p>
              <hr className="mb-3" />
              <p className="font-semibold">
                <span className="italic text-red-600">Men:</span> Legs & Abs
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Builds strength in quads, hamstrings, glutes, and calves.</p>
                <p>
                  Abs work enhances core power and aesthetics.
                </p>
                <p>Essential for balance and full-body development.</p>
              </div>
              <p className="mt-5 font-semibold">
                <span className="italic text-red-600">Women:</span> Legs & Core Stability
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
              src={trainingimg}
              className="rounded-lg mt-10 lg:mt-0 order-1"
            />
            <div className="w-5/6 mx-auto text-center mt-10 lg:mt-0">
              <p className="font-bold text-xl">Thursday</p>
              <hr className="mb-3" />
              <p className="font-semibold">
                <span className="italic text-red-600">Men:</span> Arm & Chest (Hypertrophy Focus)
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Higher volume to build size and muscle endurance.</p>
                <p>
                  Builds muscle endurance and definition in arms and chest.
                </p>
                <p>Targets chest and arms with variation in tempo and angles.</p>
              </div>
              <p className="mt-5 font-semibold">
                <span className="italic text-red-600">Women:</span> Functional Strength + Mobility
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>
                  Circuit-based training using bodyweight, kettlebells, resistance bands. 
                </p>
                <p>Emphasizes lean muscle tone and calorie burning.</p>
                <p>Promotes strength, flexibility, and movement control for everyday fitness.</p>
              </div>
            </div>
          </div>

          <div className="lg:grid grid-cols-2 items-center my-20">
            <Image src={trainingimg} className="rounded-lg mt-10 lg:mt-0" />
            <div className="w-5/6 mx-auto text-center mt-10 lg:mt-0">
              <p className="font-bold text-xl">Friday</p>
              <hr className="mb-3" />
              <p className="font-semibold">
                <span className="italic text-red-600">Men:</span> Shoulders & Back (Power Focus)
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Heavier lifts and compound moves.</p>
                <p>
                  Focus on strength, posture, and upper body performance.
                </p>
                <p>Builds size, symmetry, and control.</p>
              </div>
              <p className="mt-5 font-semibold">
                <span className="italic text-red-600">Women:</span> Full Body Conditioning + Core Burn
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Blends full-body movement patterns with focused core work.</p>
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
                <span className="italic text-red-600">Men:</span> Legs & Abs (Endurance + Strength)
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>Combination of resistance and bodyweight leg exercises with core finishers.</p>
                <p>
                  Emphasis on control and stamina.
                </p>
                <p>Adds core-intensive exercises for full engagement.</p>
              </div>
              <p className="mt-5 font-semibold">
                <span className="italic text-red-600">Women:</span> Lower Body Power + Cardio Intervals
              </p>
              <div className="text-sm flex flex-col gap-1">
                <p>
                  Legs and glutes work mixed with cardio intervals (e.g., bike, sled, treadmill). 
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
