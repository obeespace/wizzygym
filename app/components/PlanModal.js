"use client";
import React, { useState } from "react";
import PaymentForm from "./PaymentForm";
import VerifyPayment from "./VerifyPayment";

const PlanModal = ({ onClose, onPaymentVerified }) => {
  const [reference, setReference] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-950 p-6 shadow-md rounded-lg border border-gray-600 lg:w-7/12 w-5/6 mx-auto relative">
        {/* Cancel (close) icon */}
        <button
          className="absolute top-1 right-3 text-gray-400 hover:text-white text-4xl focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>
        {reference ? (
          <VerifyPayment reference={reference} onPaymentVerified={onPaymentVerified} />
        ) : (
          <PaymentForm onPaymentInitialized={setReference} />
        )}
      </div>
    </div>
  );
};

export default PlanModal;
