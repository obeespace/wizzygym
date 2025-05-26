import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  let email = localStorage.getItem("email")
  const [amount, setAmount] = useState("");
  const [paymentUrl, setPaymentUrl] = useState("");
  const [error, setError] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("api/auth/initializePayment", {
        email,
        amount: Number(amount) * 100, // Convert to kobo
      });
      setPaymentUrl(response.data.data.authorization_url);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to initialize payment");
    }
  };

  return (
    <div className="">
      <h2 className="text-center mb-3">Make Payment</h2>
      <form onSubmit={handlePayment}>
        <input
        className="text-black mb-2 rounded-lg px-2 py-1"
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
        <button className="ml-3" type="submit">Pay Now</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
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
