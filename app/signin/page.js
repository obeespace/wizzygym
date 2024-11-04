"use client"
import React from 'react'
import { motion } from "framer-motion"
import { IoMdArrowDropright } from "react-icons/io";
import Link from 'next/link';
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation';
import axios from "axios";


const page = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter()

 

  const handleLogin = (event) => {
    if (!email || !password) {
      toast.error("Kindly fill up all fields");
      event.preventDefault();
      return;
    }
  
    const data = {
      email: email,
      password: password,
    };
  
    // Use toast.promise to handle the axios request
    const promise = axios
      .post("http://localhost:2101/user/signin", data)
      .then((res) => {
        // Handle successful login, store token, navigate, etc.
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", data.email);
  
        return { name: "Sign-in successful" }; // Return success data for the toast
      })
      .catch((err) => {
        // Rethrow the error to handle it in the toast promise
        throw err.response?.data?.message || "An error occurred";
      });
  
    // Display toast with loading, success, and error states
    toast.promise(promise, {
      loading: "Signing you in...",
      success: (data) => `${data.name}, you are being redirected...`,
      error: (errorMsg) => `${errorMsg}`,
    });
  
    // Handle the redirection after successful promise resolution
    promise.then(() => {
      if (localStorage.getItem("email") === "obeewon20@gmail.com") {

        router.push("/admin");
      } else {
        router.push("/user");
      }
      
    });
  };
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.9 }} className="mt-32 lg:w-4/12 w-5/6 mx-auto">
      <Toaster position="top-right" richColors />
      <p className="text-2xl text-center font-bold">Sign <span className='italic text-red-600'>In</span></p>
      <div className="mt-10">
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

        <input
          className="border-b border-white text-black px-3 py-1 w-full mb-5 rounded-md"
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className='flex justify-between text-sm -mt-2'>
        <p>Forget Password?</p>
        <Link href='/signup'><p className='hover:underline'>New?..Sign up</p></Link>
        </div>

        <div className="flex justify-center">
        <motion.p
          whileTap={{ scale: 0.7 }}
          onClick={handleLogin}
          className="px-7 py-3 mt-7 bg-white flex font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
        >
          Sign in <IoMdArrowDropright className="text-red-600"/>
        </motion.p>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </motion.div>
  )
}

export default page