"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import { Toaster, toast } from 'sonner'
import { useRouter } from 'next/navigation';



const page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [bodygoals, setBodyGoals] = useState("");
  const [fullname, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter()


  const handleSubmit = (event) => {
    if (!fullname || !email || !bodygoals || !gender || !nickname || !password || !phone) {
      toast.error("Kindly fill up all fields");
      event.preventDefault();
      return;
    }
  
    const data = {
      fullname: fullname,
      nickname: nickname,
      bodygoals: bodygoals,
      email: email,
      gender: gender,
      phoneNumber: phone,
      password: password,
    };
  
    // axios
    //   .post("http://localhost:2101/user/signup", data)
    //   .then(() => {
    //     // setLoading(false);
    //     toast.success("User signed up Successfully");

    //     setTimeout(() => {
    //       router.push("/user");
    //     }, 3000);
    //   })
    //   .catch((err) => {
    //     toast.error(err.response.data.message);
    //   });

      const promise = axios
    .post("http://localhost:2101/user/signup", data)
    .then((res) => {
      // Successful sign-up
      return { name: "Sign-up successful" };
    })
    .catch((err) => {
      if (err.response && err.response.status === 409) {
        // Custom error message for existing email
        throw "Email already exists!";
      }
      // Rethrow a generic error if the specific error isn’t handled
      throw err.response?.data?.message || "An error occurred";
    });

  // Display toast with loading, success, and error states
  toast.promise(promise, {
    loading: "Signing you up...",
    success: (data) => `${data.name}, redirecting to sign in...`,
    error: (errorMsg) => `Sign-up failed: ${errorMsg}`,
  });

  // Redirect after successful promise resolution
  promise.then(() => {
    setTimeout(() => {
      router.push("/user");
    }, 1000);
  });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.9 }}
      className="mt-20 lg:w-5/12 w-5/6 mx-auto"
    >
      <Toaster position="top-right" richColors />
      <p className="text-2xl text-center font-bold">
        Sign <span className="italic text-red-600">Up</span>
      </p>
      <div className="mt-10 text-black">
        <div className="flex gap-5">
          <input
            className="border-b border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
            type="text"
            id="fullname"
            placeholder="Full Name"
            name="fullname"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            required
          />

          <input
            className="border-b border-red-600 shadow-sm px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
            type="text"
            id="lastname"
            placeholder="Nick Name"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickName(e.target.value)}
            required
          />
        </div>

        <input
          className="border-b border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="email"
          id="email"
          placeholder="Email"
          name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="flex gap-5">
          <select
            value={gender} onChange={(e) => setGender(e.target.value)}
            className="border-b text-black border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          >
            <option value="">Select a Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <select
            value={bodygoals} onChange={(e) => setBodyGoals(e.target.value)}
            className="border-b text-black border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          >
            <option value="">Select Goal</option>
            <option value="General Fitness">General Fitness</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="2">Weight Loss</option>
          </select>
        </div>

        <input
          className="border-b border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="number"
          id="phone"
          placeholder="Phone Number"
          name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          className="border-b border-red-600 px-3 py-1 w-full mb-5 rounded-md placeholder:text-gray-400 outline-none"
          type="password"
          id="password"
          placeholder="Password"
          name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="-mt-2 flex justify-end">
          <Link href="/signin">
            <p className="hover:underline text-sm">
              Already have an account? Sign in
            </p>
          </Link>
        </div>
        <div className="flex justify-center">
          
            <motion.p
              whileTap={{ scale: 0.7 }}
              onClick={handleSubmit}
              className="px-7 py-3 mt-7 bg-white flex font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
            >
              Sign up <IoMdArrowDropright className="text-red-600" />
            </motion.p>
          
        </div>
        {/* <ToastContainer /> */}
      </div>
    </motion.div>
  );
};

export default page;
