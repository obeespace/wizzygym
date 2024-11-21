"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"

const PlanModal = () => {
    const [showModal, setshowModal] = useState(false);
  const [showEndExam, setshowEndExam] = useState(true);
  const [showScores, setShowScores] = useState(false);
  return (
    
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg w-7/12 mx-auto">
          <div className='lg:flex justify-center gap-10'>
            <div className='border border-red-600 px-12 py-6 text-center rounded-3xl'>
              <p className="text-sm">Daily Plan</p>
              <p className='text-red-600 font-black mt-3 text-lg'>N1000</p>
            </div>

            <div className='bg-red-800 text-white px-12 py-6 mt-6 lg:mt-0 text-center rounded-3xl'>
              <p className="text-sm">Monthly Plan</p>
              <p className='font-black mt-3 text-lg'>N5000</p>
              
            </div>

            <div className='border border-red-600 px-12 py-6 mt-6 lg:mt-0 text-center rounded-3xl'>
              <p className="text-sm">3 Months Plan</p>
              <p className='text-red-600 font-black mt-3 text-lg'>N12000</p>
            </div>
          </div>
          </div>
        </div>
  )
}

export default PlanModal