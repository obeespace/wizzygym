"use client"
import React, { useEffect, useState } from "react";
import { MdOutlineCardMembership } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import { WiSunrise } from "react-icons/wi";
import { PiBowlFood } from "react-icons/pi";
import { IoMdFitness } from "react-icons/io";
import { WiDaySunny } from "react-icons/wi";
import { TiWeatherNight } from "react-icons/ti";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { LuMoreVertical } from "react-icons/lu";
import AdminTable from "./AdminTable";
import { useRouter } from "next/navigation";
import { Toaster, toast } from 'sonner'
import axios from "axios";
import { IoMdArrowDropright } from "react-icons/io";
import { motion } from "framer-motion"
import WorkoutCard from "./WorkoutCard";

const page = () => {
  const [users, setUsers] = useState([]);
  const [trainerRequests, setTrainerRequests] = useState([]);
  const [loadingRequests, setLoadingRequests] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    toast.success("Signed out successful")

    localStorage.removeItem("token");
    
    setTimeout(() => {
      router.push("/");
    }, 1800);
    
  
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          toast.error("Unauthorized. Please log in.");
          router.push('/signin');
          return;
        }

        const response = await axios.get('api/auth/allUsers', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users. Check your connection or permissions.");
      }
    };

    fetchUsers();
  }, [router]);

  useEffect(() => {
    // Fetch trainer change requests for admin
    const fetchRequests = async () => {
      setLoadingRequests(true);
      try {
        const res = await axios.get("/api/auth/trainerChangeRequest");
        setTrainerRequests(res.data);
      } catch (e) {
        setTrainerRequests([]);
      }
      setLoadingRequests(false);
    };
    fetchRequests();
  }, []);

  const handleTrainerRequestAction = async (userId, approve) => {
    await axios.put("/api/auth/trainerChangeRequest", { userId, approve });
    setTrainerRequests((prev) => prev.filter((r) => r.userId !== userId));
    toast.success(approve ? "Trainer changed!" : "Request disapproved");
  };

  return (
    <div className="w-5/6 mx-auto mt-10">
      <Toaster position="top-right" richColors />
      <div className="lg:flex gap-5">
        <div className="">
          <p className="text-3xl font-semibold">
            <span className="italic text-red-600">Hi</span>, Admin
          </p>
          <p className="text-sm">Lets look at our numbers</p>
          <div className="mt-7 flex lg:gap-5 gap-2">
            <div className="rounded-xl shadow-sm px-3 py-5 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <MdOutlineCardMembership className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4">{users.length}</p>
              <p className="text-sm">Total Customers</p>
              <p className="text-green-600 mt-4">100%</p>
            </div>

            <div className="rounded-xl shadow-sm px-3 py-5 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <HiStatusOnline className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4">240</p>
              <p className="text-sm">Active Customers</p>
              <p className="text-red-600 mt-4">10.9%</p>
            </div>

            <div className="rounded-xl shadow-sm  px-3 py-5 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <IoMdFitness className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4">4</p>
              <p className="text-sm">Physical Trainers</p>
              <p className="text-green-600 mt-4">12.4%</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border lg:w-3/12 mt-10 lg:mt-0 px-4 py-4 border-gray-600 bg-gray-950">
          <div className="border-b border-red-800 pb-3 flex justify-between items-center">
            <div className="bg-white rounded-full px-1 py-1">
              <PiBowlFood className="text-black" />
            </div>

            <p>Meal Plans</p>
            <LuMoreVertical className="cursor-pointer" />
          </div>
          <div className="mt-5">
            <div className="flex gap-3">
              <div className="bg-white rounded-full px-1 py-1">
                <WiSunrise className="text-black" />
              </div>

              <p>Bread and goatmeat sauce</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-3">
              <div className="bg-white rounded-full px-1 py-1">
                <WiDaySunnyOvercast className="text-black" />
              </div>
              <p>Smoothie and bean cake</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-3">
              <div className="bg-white rounded-full px-1 py-1">
                <WiDaySunny className="text-black" />
              </div>
              <p>Okra Soup and Ice cream</p>
            </div>
          </div>
          <div className="mt-5">
            <div className="flex gap-3">
              <div className="bg-white rounded-full px-1 py-1">
                <TiWeatherNight className="text-black" />
              </div>
              <p>Green Tea and liver bread</p>
            </div>
          </div>
        </div>

        <WorkoutCard/>
      </div>

      <div className="lg:mt-4 mt-10 lg:flex">
        <div>
        <p className="text-2xl font-semibold">
          Fitfam <span className="text-red-600 italic">Details</span>
        </p>

        <div className="mt-5">
          <AdminTable users={users}/>
        </div>
        {/* Trainer Change Requests */}
        {loadingRequests ? (
          <p className="text-white mt-5">Loading trainer change requests...</p>
        ) : trainerRequests.length > 0 ? (
          <div className="mt-8 border border-gray-700 rounded-xl p-4">
            <h3 className="text-lg font-bold text-white mb-4">Trainer Change Requests</h3>
            {trainerRequests.map((req, idx) => (
              <div key={idx} className="mb-4 p-3 rounded bg-gray-900 flex flex-col lg:flex-row lg:items-center justify-between">
                <div>
                  <p className="text-white">User ID: <span className="font-mono">{req.userId}</span></p>
                  <p className="text-white">Requested Trainer: <span className="text-red-400 font-semibold">{req.trainer}</span></p>
                  <p className="text-white">Reason: {req.reason}</p>
                </div>
                <div className="flex gap-3 mt-3 lg:mt-0">
                  <button onClick={() => handleTrainerRequestAction(req.userId, true)} className="px-4 py-2 bg-green-600 text-white rounded-xl font-semibold">Approve</button>
                  <button onClick={() => handleTrainerRequestAction(req.userId, false)} className="px-4 py-2 bg-gray-500 text-white rounded-xl font-semibold">Disapprove</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white mt-5">No trainer change requests.</p>
        )}
        </div>

        <div className="lg:mt-4 mt-10 lg:w-4/12 lg:flex justify-center items-center">
        <div>
          
            <motion.a
            href="forgetpassword"
              whileTap={{ scale: 0.7 }}
              className="px-5 py-2 bg-white flex w-fit font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
            >
              Change Password <IoMdArrowDropright className="text-red-600" />
            </motion.a>
          

          
            <motion.p
              whileTap={{ scale: 0.7 }}
              onClick={handleLogout}
              className="px-5 py-2 bg-white w-fit flex font-semibold items-center mt-5 gap-1 text-black rounded-xl cursor-pointer"
            >
              Log Out <IoMdArrowDropright className="text-red-600" />
            </motion.p>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
