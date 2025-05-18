"use client";
import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import VerifyPayment from "./VerifyPayment";

const PlanModal = () => {
  const [showModal, setshowModal] = useState(false);
  const [showEndExam, setshowEndExam] = useState(true);
  const [showScores, setShowScores] = useState(false);
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-950 p-6 shadow-md rounded-lg border border-gray-600 w-7/12 mx-auto">
        <PaymentForm />
        <VerifyPayment />
      </div>
    </div>
  );
};

export default PlanModal;
