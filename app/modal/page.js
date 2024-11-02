"use client"
import { useState } from 'react';
import axios from 'axios';

const ForgotPasswordModal = () => {
  const [email, setEmail] = useState('');
  const [resetCode, setResetCode] = useState('');
  const [codeVerified, setCodeVerified] = useState(false);
  const [newPassword, setNewPassword] = useState('');

  const handleSendCode = async () => {
    try {
      await axios.post('http://localhost:2101/user/forgot-password', { email });
      alert('Reset code sent to your email');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const response = await axios.post('http://localhost:2101/user/verify-reset-code', { email, resetCode });
      if (response.data.verified) {
        setCodeVerified(true);
      }
    } catch (error) {
      alert('Invalid or expired reset code');
    }
  };

  const handlePasswordReset = async () => {
    try {
      await axios.post('http://localhost:2101/user/reset-password', { email, newPassword });
      alert('Password successfully changed');
    } catch (error) {
      console.log(error)
      alert(error.response.data.message);
    }
  };

  return (
    <div>
      {!codeVerified ? (
        <div className='mx-auto w-5/6'>
          <input
            className='border-b border-white text-black px-3 py-1 w-full mb-5 rounded-md'
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSendCode}>Send Reset Code</button>

          <input
            className='text-black'
            type="text"
            placeholder="Enter reset code"
            value={resetCode}
            onChange={(e) => setResetCode(e.target.value)}
          />
          <button onClick={handleVerifyCode}>Verify Code</button>
        </div>
      ) : (
        <div>
          <input
            className='text-black'
            type="password"
            placeholder="New password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <button onClick={handlePasswordReset}>Reset Password</button>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordModal;
