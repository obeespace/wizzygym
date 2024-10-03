import React from 'react'

const Footer = () => {
  return (
    <section className=" text-white pt-40 pb-20">
      <div className="lg:flex w-4/5 mx-auto justify-between">
        <div className="flex flex-wrap gap-32">
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-red-600">Workout Plans</p>
            <p>Weight Loss</p>
            <p>Muscle Gain</p>
            <p>Aerobics</p>
            <p>See all</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold text-red-600">Company</p>
            <p>About</p>
            <p>Training</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col gap-2 -mt-14 lg:mt-0">
            <p className="font-semibold text-red-600">Socials</p>
            <p>Instagram</p>
            <p>TikTok</p>
            <p>Whatsapp</p>
            <p>Facebook</p>
          </div>
        </div>
        <div className="lg:w-2/6 mt-16 lg:mt-0">
          <p className="font-semibold mb-3">Sign up for our newsletter</p>
          <p>
            Subscribe to get the latest design news, articles, resources and
            inspiration.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer