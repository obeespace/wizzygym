import React, { useState } from "react";
import axios from "axios";

const VerifyPayment = ({ onPaymentVerified }) => {
  const [reference, setReference] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleVerification = async (e) => {
    e.preventDefault();
    setError("");
    setData(null);

    try {
      const response = await axios.post(`/api/auth/verifyPayment/${reference}`, { reference });
      setData(response.data.user);
      if (onPaymentVerified) onPaymentVerified(); // Refresh user info after verification
    } catch (err) {
      setError(err.response?.data?.error || "Failed to verify payment");
    }
  };

  return (
    <div>
      <h2>Verify Payment</h2>
      <form onSubmit={handleVerification}>
        <input
        className="text-black"
          type="text"
          placeholder="Transaction Reference"
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          required
        />
        <button type="submit">Verify</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <div>
          <h3>Payment Details</h3>
          <p>Status: {data.subscription}</p>
          <p>Email: {data.email}</p>
          <p>Reference: {reference}</p>
        </div>
      )}
    </div>
  );
};

export default VerifyPayment;
