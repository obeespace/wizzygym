import React, { useState } from "react";
import axios from "axios";

const VerifyPayment = () => {
  const [reference, setReference] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleVerification = async (e) => {
    e.preventDefault();
    setError("");
    setData(null);

    try {
      const response = await axios.get(`http://localhost:2101/user/verify/${reference}`);
      setData(response.data.data);
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
          <p>Status: {data.status}</p>
          <p>Amount: {data.amount / 100} NGN</p>
          <p>Reference: {data.reference}</p>
        </div>
      )}
    </div>
  );
};

export default VerifyPayment;
