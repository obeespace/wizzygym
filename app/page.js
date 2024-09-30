import Image from "next/image";
import icon1 from "./image/icon1.png";
import icon2 from "./image/icon2.png";
import icon3 from "./image/icon3.png";
import landingpic from "./image/landingimage4.jpg"

export default function Home() {
  return (
    <main className="w-5/6 mx-auto">
      <section className="mt-20 ">
        <div className="lg:flex justify-between gap-20 ">
        <p className="lg:text-8xl text-6xl font-black lg:w-4/6 w-full">
          Step Up Your Fitness Game in Time
        </p>
        <div className="mt-10 lg:mt-0 lg:w-5/12">
          <p className="">
            Tranformation begins from within and we here at Wizzy pro have the
            right tool to tilt your mind to see the positives of a great well
            being
          </p>
          <div className="flex justify-between mt-10 gap-10">
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
          <p className="text-sm">
            We have a track record of having transformed the lives of
            3000 people 
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
    </main>
  );
}
