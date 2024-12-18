"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import PaymentForm from './PaymentForm';

const PlanModal = () => {
    const [showModal, setshowModal] = useState(false);
  const [showEndExam, setshowEndExam] = useState(true);
  const [showScores, setShowScores] = useState(false);
  return (
    
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-950 p-6 rounded-lg shadow-lg w-7/12 mx-auto">
          <div></div>
          <PaymentForm/>
          </div>
        </div>
  )
}

export default PlanModal