import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from 'sonner'
import { motion } from "framer-motion";


const PaymentForm = ({ onPaymentInitialized }) => {
  let email = typeof window !== "undefined" ? localStorage.getItem("email") : "";
  const [amount, setAmount] = useState("");
  const [paymentUrl, setPaymentUrl] = useState("");
  const [error, setError] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("/api/auth/initializePayment", {
        email,
        amount: Number(amount) * 100, // Convert to kobo
      });
      const reference = response.data.data.reference;
      setPaymentUrl(response.data.data.authorization_url);
      if (onPaymentInitialized) onPaymentInitialized(reference);
      window.open(response.data.data.authorization_url, "_blank");
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to initialize payment");
    }
  };

  return (
    <div className="">
            <Toaster position="top-right" richColors />
      
      <h2 className="text-center mb-3">Make Payment</h2>
      <form onSubmit={handlePayment}>
        <input
        className="text-black mb-2 rounded-lg px-2 py-1 w-full"
          type="email"
          placeholder="Email"
          disabled
          value={email}
          required
        />
        <select
            value={amount} onChange={(e) => setAmount(e.target.value)}
            className="border-b text-black border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          >
            <option value="">Select a Plan</option>
            <option value="2000">Day Plan - N2000</option>
            <option value="15000">Monthly Plan - N15000</option>
            <option value="40000">3 Months Plan - N40000</option>
          </select>
        <motion.div whileTap={{ scale: 0.7 }} className="flex justify-center"><button className="px-5 py-2 bg-white flex w-fit font-semibold items-center gap-1 text-black rounded-xl cursor-pointer" type="submit">Pay Now</button></motion.div>
      </form>
      {paymentUrl && (
        <p>
          <a href={paymentUrl} target="_blank" rel="noopener noreferrer">
            Complete Payment
          </a>
        </p>
      )}
    </div>
  );
};

export default PaymentForm;
