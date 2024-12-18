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
      const response = await axios.post("http://localhost:2101/user/initialize", {
        email,
        amount: Number(amount) * 100, // Convert to kobo
      });
      setPaymentUrl(response.data.data.authorization_url);
    } catch (err) {
      setError(err.response?.data?.error || "Failed to initialize payment");
    }
  };

  return (
    <div>
      <h2>Make a Payment</h2>
      <form onSubmit={handlePayment}>
        <input
        className="text-black"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="number"
          className="text-black"
          placeholder="Amount (NGN)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit">Pay Now</button>
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
