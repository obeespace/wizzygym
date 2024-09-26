import React from 'react'
import {
    BsDribbble,
    BsFacebook,
    BsInstagram,
    BsLinkedin,
  } from "react-icons/bs";

const page = () => {
  return (
    <main className='w-5/6 mx-auto mt-20'>
      <section className=" container mx-auto">
        <div className="lg:w-3/6">
          <p className="mb-2">Contact us</p>
          <p className="text-4xl font-semibold">Let’s Build Ourselves</p>
          <p className="mt-3 text-lg">
            Ready to change the narrative and take your
            fitness to the next level? We’d love to hear from you. Don’t be shy, say hello! 
          </p>
        </div>
      </section>

      <section className="mt-40 mx-auto w-11/12 lg:flex justify-between">
        <div className="lg:w-5/12">
          <div className="mb-5">
            <p className="mb-2 text-lg font-semibold">Contact Us</p>
            <div className="flex justify-between">
              <p>info@wizzypro.fitness</p>
              {/* <p>(234) 806 314 5125</p> */}
            </div>
          </div>

          <hr className="" />

          <div className="mt-5">
            <p className="mb-4 text-lg font-semibold">Follow us</p>
            <div className="flex gap-14 text-2xl">
              <BsDribbble />
              <BsLinkedin />
              <BsFacebook />
              <BsInstagram />
            </div>
          </div>
        </div>

        <div className="mt-20 lg:mt-0 lg:w-5/12 mx-auto flex text-black flex-col items-center">
          <div className="w-full justify-between items-center ">
            <input
              placeholder="Name"
              className="border-b border-black px-3 py-1 w-full mb-5 rounded-md  placeholder:text-gray-400 outline-none"
            />
            <input
              placeholder="Email"
              className="border-b border-black px-3 py-1 w-full mb-5 lg:mb-0 rounded-md placeholder:text-gray-400 outline-none"
            />
          </div>
          <textarea
            className="w-full px-3 py-1 border-b border-black mt-2 lg:mt-5 rounded-md  placeholder:text-gray-400 outline-none"
            placeholder="Message"
            rows={5}
          />
          <div className="w-full flex justify-end mt-8">
            <button className="bg-black text-white px-4 hover:bg-gray-900 py-3 rounded-md shadow-sm">
              Send Message
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default page