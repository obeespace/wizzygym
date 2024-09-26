import Image from "next/image";
import icon1 from './image/icon1.png'
import icon2 from './image/icon2.png'
import icon3 from './image/icon3.png'

export default function Home() {
  return (
    <main className="w-5/6 mx-auto">
      <section className="mt-20 lg:flex justify-between gap-20 ">
        <p className="lg:text-8xl text-6xl font-black lg:w-4/6 w-full">
          Step Up Your Fitness Game in Time
        </p>
        <div className="mt-10 lg:mt-0 lg:w-2/6">
          <p className="">
            Tranformation begins from within and we here at Wizzy pro have the
            right tool to tilt your mind to see the positives of a great well
            being
          </p>
          <div className="flex mt-10">
            <Image src={icon1} alt="icon image 1" width={40} height={40} className="rounded-full border-2 border-white" />
            <Image src={icon2} alt="icon image 2" width={40} height={40} className="rounded-full border-2 border-white" />
            <Image src={icon3} alt="icon image 3" width={40} height={40} className="rounded-full border-2 border-white" />
          </div>
        </div>
      </section>
    </main>
  );
}
