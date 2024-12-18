"use client"
import React, { useState } from 'react'
import { motion } from "framer-motion"
import { IoMdArrowDropright } from "react-icons/io";
import Link from 'next/link';
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation';
import axios from "axios";


const page = () => {
    const [email, setEmail] = useState('');
    const [resetCode, setResetCode] = useState('');
    const [codeVerified, setCodeVerified] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [showCodeTab, setshowCodeTab] = useState(false);
    const router = useRouter()

  
  
    const handleSendCode = async () => {
      try {
        await axios.post('http://localhost:2101/user/forgot-password', { email });
        toast.success('Reset code sent to your email')
        setTimeout(() => {
          setshowCodeTab(true)
        }, 2000);
        
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
  
    const handleVerifyCode = async () => {
      try {
        const response = await axios.post('http://localhost:2101/user/verify-reset-code', { email, resetCode });
        if (response.data.verified) {
          setCodeVerified(true);
        toast.success('Verification Sucessful')

        }
      } catch (error) {
        toast.error('Invalid or expired reset code');
      }
    };
  
    const handlePasswordReset = async () => {
      try {
        await axios.post('http://localhost:2101/user/reset-password', { email, newPassword });
        toast.success('Password successfully changed');
        setTimeout(() => {
          router.push("/signin");
        }, 2000);
      } catch (error) {
        console.log(error)
        toast.error(error.response.data.message);
      }
    };
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.9 }} className="mt-32 lg:w-4/12 w-5/6 mx-auto">
      <Toaster position="top-right" richColors />
      <p className="text-2xl text-center font-bold">Reset <span className='italic text-red-600'>Password</span></p>
      {!codeVerified ? (<div className="mt-10">
      <div>
        <input
          className="border-b border-white text-black px-3 py-1 w-full mb-5 rounded-md"
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        

        <div className="flex justify-center">
        <motion.p
          whileTap={{ scale: 0.7 }}
          onClick={handleSendCode}
          className="px-7 py-3 mt-7 bg-white flex font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
        >
          Send Reset Code<IoMdArrowDropright className="text-red-600"/>
        </motion.p>
        </div>
      </div>

      {showCodeTab && <motion.div initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.9 }} className="mt-10">
        <input
          className="border-b border-white text-black px-3 py-1 w-full mb-5 rounded-md"
          type="text"
          id="text"
          placeholder="Code"
          name="code"
          value={resetCode}
          onChange={(e) => setResetCode(e.target.value)}
          required
        />

        

        <div className="flex justify-center">
        <motion.p
          whileTap={{ scale: 0.7 }}
          onClick={handleVerifyCode}
          className="px-7 py-3 mt-7 bg-white flex font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
        >
          Verify Code<IoMdArrowDropright className="text-red-600"/>
        </motion.p>
        </div>
      </motion.div>}
      </div>) :
      (
        <div className='mt-10'>
        <input
          className="border-b border-white text-black px-3 py-1 w-full mb-5 rounded-md"
          type="text"
          id="text"
          placeholder="New Password"
          name="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        

        <div className="flex justify-center">
        <motion.p
          whileTap={{ scale: 0.7 }}
          onClick={handlePasswordReset}
          className="px-7 py-3 mt-7 bg-white flex font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
        >
          {}<IoMdArrowDropright className="text-red-600"/>
        </motion.p>
        </div>
      </div>
      )} 
    </motion.div>
  )
}

export default page