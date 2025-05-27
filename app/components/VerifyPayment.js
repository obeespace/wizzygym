import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const VerifyPayment = ({ reference, onPaymentVerified }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const handleVerification = async (e) => {
    e.preventDefault();
    setError("");
    setData(null);
    setLoading(true);
    setButtonDisabled(true);
    try {
      const response = await axios.post(
        `/api/auth/verifyPayment/${reference}`,
        { reference }
      );
      setData(response.data.user);
      toast.success("Payment successful! Subscription activated.");
      if (onPaymentVerified) onPaymentVerified();
    } catch (err) {
      toast.error(err.response?.data?.error || "Failed to verify payment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <Toaster position="top-right" richColors />

      <h2 className="text-center mb-4">Verify Payment</h2>
      <form onSubmit={handleVerification}>
        <input
          className="text-black mb-2 rounded-lg px-2 py-1 w-full"
          type="text"
          value={reference}
          disabled
        />
        <motion.div whileTap={{ scale: 0.7 }} className="flex justify-center mt-2">
          <button
            className="px-5 py-2 bg-white flex w-fit font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
            type="submit"
            disabled={loading || buttonDisabled}
            style={loading || buttonDisabled ? { opacity: 0.6, cursor: 'not-allowed' } : {}}
          >
            {loading ? "Verifying..." : "Verify Payment"}
          </button>
        </motion.div>
      </form>
      {/* {data && (
        <div>
          <h3>Payment Details</h3>
          <p>Status: {data.subscription}</p>
          <p>Email: {data.email}</p>
          <p>Reference: {reference}</p>
        </div>
      )} */}
    </div>
  );
};

export default VerifyPayment;
