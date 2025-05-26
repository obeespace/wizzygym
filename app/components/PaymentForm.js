import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [email, setEmail] = useState("");
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
        className="text-black mb-2 rounded-sm px-2 py-1"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          className="text-black mb-2 rounded-sm px-2 py-1"
          placeholder="Amount (NGN)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
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
