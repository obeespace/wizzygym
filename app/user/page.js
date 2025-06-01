"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { MdOutlineCardMembership } from "react-icons/md";
import { HiStatusOnline } from "react-icons/hi";
import { WiSunrise } from "react-icons/wi";
import { PiBowlFood } from "react-icons/pi";
import { IoMdFitness } from "react-icons/io";
import { WiDaySunny } from "react-icons/wi";
import { TiWeatherNight } from "react-icons/ti";
import { WiDaySunnyOvercast } from "react-icons/wi";
import { RiProfileLine } from "react-icons/ri";
import { LuMoreVertical } from "react-icons/lu";
import { IoMdArrowDropright } from "react-icons/io";
import { IoCardOutline } from "react-icons/io5";
import jwt_decode from "jsonwebtoken";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Toaster, toast } from "sonner";
import WorkoutCard from "../admin/WorkoutCard";
import PlanModal from "../components/PlanModal";
import ChangeTrainerModal from "../components/ChangeTrainerModal";
import html2canvas from "html2canvas";

const SkeletonBox = ({ className = "", style = {} }) => (
  <div className={`animate-pulse bg-gray-700 rounded ${className}`} style={style} />
);

const page = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [userInfo, setUserInfo] = useState("");
  const [showplan, setShowPlan] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);
  const [showChangeTrainer, setShowChangeTrainer] = useState(false);
  const [reviewingTrainerRequest, setReviewingTrainerRequest] = useState(false);
  const [pendingTrainerRequest, setPendingTrainerRequest] = useState(null);
  const router = useRouter();

  const handleShowPlan = () => {
    setShowPlan(true);
  };

  const handleClosePlan = () => {
    setShowPlan(false);
  };

  const handleLogout = () => {
    toast.success("Signed out successful");

    localStorage.removeItem("token");

    setTimeout(() => {
      router.push("/");
    }, 1800);
  };

  const fetchUserInfo = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        // Fetch user data from backend using the ID
        const userId = jwt_decode.decode(token).id;
        const res = await axios.get(`api/auth/findUser/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUserInfo(res.data);
      } catch (error) {
        console.error("Token decoding error:", error);
        router.push("/signin");
      }
    } else {
      router.push("/signin");
    }
  };

  // Check if subscription expired and update status and trainer accordingly
  useEffect(() => {
    if (userInfo && userInfo.serviceEndDate) {
      const now = new Date();
      const endDate = new Date(userInfo.serviceEndDate);
      if (endDate < now && userInfo.subscription === "Active") {
        setUserInfo((prev) => ({
          ...prev,
          subscription: "Deactivated",
          trainer: "Deactivated",
        }));
      }
    }
  }, [userInfo]);

  useEffect(() => {
    fetchUserInfo();
  }, [router]);

  const handleShowReceipt = () => setShowReceipt(true);
  const handleCloseReceipt = () => setShowReceipt(false);

  const handleDownloadReceipt = async () => {
    const element = document.getElementById("receipt-card");
    if (!element) return;
    const canvas = await html2canvas(element);
    const link = document.createElement("a");
    link.download = `wizzygym-receipt-${userInfo.nickname || "user"}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  const handleSendTrainerRequest = async (trainer, reason) => {
    setReviewingTrainerRequest(true);
    setPendingTrainerRequest({ trainer, reason });
    // Send request to backend for admin review
    await axios.post("/api/auth/trainerChangeRequest", {
      userId: userInfo._id,
      trainer,
      reason,
    });
    // Optionally, show a toast
    toast.success("Trainer change request sent! Awaiting admin approval.");
    setShowChangeTrainer(false);
  };

  if (userInfo === "") {
    // Skeleton loading UI
    return (
      <div className="w-5/6 mx-auto mt-10">
        <Toaster position="top-right" richColors />
        <div className="lg:flex gap-5">
          <div className="flex-1">
            <SkeletonBox className="h-8 w-1/2 mb-2" />
            <SkeletonBox className="h-4 w-1/3 mb-6" />
            <div className="mt-7 lg:flex grid grid-cols-2 lg:gap-5 gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="rounded-xl shadow-sm lg:px-3 px-5 py-5 mb-3 shadow-gray-700 border border-gray-700">
                  <SkeletonBox className="h-8 w-8 mb-4" />
                  <SkeletonBox className="h-6 w-1/2 mb-2" />
                  <SkeletonBox className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border lg:w-3/12 mt-10 lg:mt-0 px-4 py-4 border-gray-600 bg-gray-950">
            <SkeletonBox className="h-6 w-1/2 mb-4" />
            {[1, 2, 3, 4].map((i) => (
              <div className="mt-5 flex gap-3 items-center" key={i}>
                <SkeletonBox className="h-8 w-8" />
                <SkeletonBox className="h-4 w-2/3" />
              </div>
            ))}
          </div>
          <div className="flex-1">
            <div className="rounded-xl border mt-5 px-4 py-4 border-gray-600">
              <SkeletonBox className="h-6 w-1/2 mb-4" />
              {[1, 2, 3, 4].map((i) => (
                <div className="mt-5 flex gap-3 items-center" key={i}>
                  <SkeletonBox className="h-8 w-8" />
                  <SkeletonBox className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:flex gap-5 mt-10">
          <div className="lg:w-4/12">
            <SkeletonBox className="h-6 w-1/3 mb-4" />
            <div className="rounded-xl border mt-5 px-4 py-4 border-gray-600">
              {[1, 2, 3, 4].map((i) => (
                <div className="mt-5 flex gap-3 items-center" key={i}>
                  <SkeletonBox className="h-8 w-8" />
                  <SkeletonBox className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl border lg:w-4/12 mt-5 border-gray-600">
            <div className="bg-gray-950 shadow-gray-600 shadow-md rounded-xl px-4 py-4">
              <SkeletonBox className="h-6 w-1/2 mb-4" />
              <SkeletonBox className="h-8 w-2/3 mb-4 mx-auto" />
              <SkeletonBox className="h-4 w-1/3 ml-auto" />
            </div>
            <div className="px-4 py-3">
              <SkeletonBox className="h-4 w-1/2 mb-2" />
              {[1, 2, 3].map((i) => (
                <div className="flex justify-between mt-2" key={i}>
                  <SkeletonBox className="h-4 w-1/4" />
                  <SkeletonBox className="h-4 w-1/4" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-4/12 flex flex-col items-center justify-center mt-10 lg:mt-0">
            <SkeletonBox className="h-10 w-40 mb-4" />
            <SkeletonBox className="h-10 w-32" />
          </div>
        </div>
        <div className="mt-10">
          {/* WorkoutCard skeleton */}
          <div className="rounded-xl border border-gray-700 p-6">
            <SkeletonBox className="h-6 w-1/3 mb-4" />
            {[1, 2, 3].map((i) => (
              <SkeletonBox key={i} className="h-4 w-full mb-2" />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (!userInfo || Object.keys(userInfo).length === 0) return <p className="mx-auto w-5/6">Loading...</p>;

  // console.log('userInfo:', userInfo); // Debug: check what is coming from backend

  return (
    <div className="w-5/6 mx-auto mt-10">
      <Toaster position="top-right" richColors />
      <div className="lg:flex gap-5">
        <div className="">
          <p className="text-3xl font-semibold">
            <span className="italic text-red-600">Hi</span>, {userInfo.nickname}
          </p>
          <p className="text-sm">Lets look at your data</p>
          <div className="mt-7 lg:flex grid grid-cols-2 lg:gap-5 gap-2">
            <div className="rounded-xl shadow-sm lg:px-3 px-5 py-5 mb-3 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <MdOutlineCardMembership className="text-black" />
              </div>
              <p
                className={`text-xl font-semibold mt-4 ${
                  userInfo.subscription === "Active"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {userInfo.subscription}
              </p>
              <div className="">
                <p className="text-sm">Subscription status</p>
                {userInfo.subscription === "Active" ? (
                  <p
                    className="text-green-600 mt-4 cursor-pointer"
                    onClick={handleShowReceipt}
                  >
                    Show Payment
                  </p>
                ) : (
                  <p
                    className="text-blue-600 mt-4 cursor-pointer"
                    onClick={handleShowPlan}
                  >
                    See Plans
                  </p>
                )}
              </div>
            </div>

            <div className="rounded-xl shadow-sm lg:px-3 px-5 py-5 mb-3 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <HiStatusOnline className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4">
                {userInfo.trainer &&
                userInfo.trainer !== "New User" &&
                userInfo.trainer !== "Deactivated"
                  ? userInfo.trainer
                  : userInfo.subscription === "Active"
                  ? "Assigned Trainer"
                  : "Deactivated"}
              </p>
              <div className="">
                <p className="text-sm">Assigned trainer</p>
                <p className={`mt-4 cursor-pointer ${userInfo.subscription !== "Active" ? "text-gray-400 cursor-not-allowed" : "text-red-600"}`}
                  onClick={userInfo.subscription === "Active" ? () => setShowChangeTrainer(true) : undefined}
                  disabled={userInfo.subscription !== "Active"}
                  title={userInfo.subscription !== "Active" ? "Buy a plan to enable this option" : ""}
                  onMouseOver={e => {
                    if (userInfo.subscription !== "Active") {
                      e.currentTarget.style.position = 'relative';
                      const tooltip = document.createElement('span');
                      tooltip.textContent = 'Buy a plan to enable this option';
                      tooltip.className = 'absolute left-0 top-full mt-1 px-2 py-1 bg-black text-white text-xs rounded z-50';
                      tooltip.style.whiteSpace = 'nowrap';
                      tooltip.id = 'change-trainer-tooltip';
                      e.currentTarget.appendChild(tooltip);
                    }
                  }}
                  onMouseOut={e => {
                    const tooltip = e.currentTarget.querySelector('#change-trainer-tooltip');
                    if (tooltip) tooltip.remove();
                  }}
                >
                  change Trainer
                </p>
              </div>
            </div>

            <div className="rounded-xl shadow-sm lg:px-3 px-5 py-5 mb-3 shadow-gray-700 border border-gray-700">
              <div className="rounded-full px-2 py-2 bg-white w-fit">
                <IoMdFitness className="text-black" />
              </div>
              <p className="text-xl font-semibold mt-4">{userInfo.bodygoals}</p>
              <p className="text-sm">Major fitness/body Goals</p>
              <div></div>
              <p className="text-green-600 mt-4 hover:underline cursor-pointer flex items-center">
                see more <IoMdArrowDropright className="text-red-600" />
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border lg:w-3/12 mt-10 lg:mt-0 px-4 py-4 border-gray-600 bg-gray-950">
          <div className="border-b border-red-800 pb-3 flex gap-3 items-center">
            <div className="bg-white rounded-full px-1 py-1">
              <PiBowlFood className="text-black" />
            </div>

            <p>Meal Plans</p>
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

        <WorkoutCard />
      </div>

      <div className="lg:flex gap-5">
        <div className="lg:mt-4 mt-10 lg:w-4/12">
          <p className="text-2xl font-semibold">
            My <span className="text-red-600 italic">Details</span>
          </p>

          <div className="rounded-xl border mt-5 px-4 py-4 border-gray-600 ">
            <div className="border-b border-red-800 pb-3 flex justify-between items-center">
              <div className="flex justify-between gap-3">
                <div className="bg-white rounded-full px-1 py-1">
                  <RiProfileLine className="text-black" />
                </div>

                <p className="font-semibold">{userInfo.fullname}</p>
              </div>
              <div className="">
                {toggleMenu ? (
                  <motion.p whileTap={{ scale: 0.7 }}>
                    <IoMdClose
                      className="text-xl text-white cursor-pointer"
                      onClick={() => setToggleMenu((prev) => !prev)}
                    />
                  </motion.p>
                ) : (
                  <motion.p whileTap={{ scale: 0.7 }}>
                    <LuMoreVertical
                      className="text-xl cursor-pointer text-white"
                      onClick={() => setToggleMenu((prev) => !prev)}
                    />
                  </motion.p>
                )}
              </div>
              {toggleMenu && (
                <div className="bg-white z-50 text-gray-900 h-max w-40 absolute top-20 right-8 py-4 rounded-xl shadow-md">
                  <div className="flex flex-col gap-3 items-center w-5/6 mx-auto text-lg font-semibold ">
                    {/* <Link
                      href="/mission"
                      className="hover:bg-gray-700 hover:text-white w-full text-center rounded-md"
                    >
                      <p
                        className="px-3 py-2"
                        onClick={() => setToggleMenu((prev) => !prev)}
                      >
                        Mission
                      </p>
                    </Link> */}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-5">
              <div className="flex gap-3">
                <div className="bg-white rounded-full px-1 py-1">
                  <WiSunrise className="text-black" />
                </div>

                <p>{userInfo.email}</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex gap-3">
                <div className="bg-white rounded-full px-1 py-1">
                  <WiDaySunnyOvercast className="text-black" />
                </div>
                <p>{userInfo.phoneNumber}</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex gap-3">
                <div className="bg-white rounded-full px-1 py-1">
                  <WiDaySunny className="text-black" />
                </div>
                <p>{userInfo.gender}</p>
              </div>
            </div>
            <div className="mt-5">
              <div className="flex gap-3">
                <div className="bg-white rounded-full px-1 py-1">
                  <TiWeatherNight className="text-black" />
                </div>
                <p>
                  {userInfo.serviceEndDate
                    ? `Sub End Date: ${new Date(
                        userInfo.serviceEndDate
                      ).toLocaleDateString()}`
                    : "Subscription End Date"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* payment portal */}
        <div className="rounded-xl border lg:w-4/12 mt-5  border-gray-600">
          <div className="bg-gray-950 shadow-gray-600 shadow-md rounded-xl px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full px-1 py-1">
                <IoCardOutline className="text-black" />
              </div>
              <p>Payment Card</p>
            </div>
            <p className="font-semibold text-2xl mt-5 text-center">
              5562 xxxx xxxx xxxx
            </p>
            <div className="flex justify-end items-center cursor-pointer mt-5">
              <p className="flex gap-2" onClick={handleShowPlan}>
                Buy Plan
              </p>
              <IoMdArrowDropright className="text-red-700" />
            </div>
            {showplan && (
              <PlanModal
                onClose={handleClosePlan}
                onPaymentVerified={fetchUserInfo}
              />
            )}
          </div>

          <div className="px-4 py-3">
            <p className="my-2 border-b border-red-600 w-fi">Previous Plans</p>
            <div className="flex justify-between">
              <p>30 Days</p>
              <p>N20,000</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>1 Day</p>
              <p>N2,000</p>
            </div>
            <div className="flex justify-between mt-2">
              <p>7 Days</p>
              <p>N8,000</p>
            </div>
          </div>
        </div>

        <div className="lg:mt-4 mt-10 lg:w-4/12 lg:flex justify-center items-center">
          <div>
            <Link href="/forgetpassword">
              <motion.p
                whileTap={{ scale: 0.7 }}
                className="px-5 py-2 bg-white flex w-fit font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
              >
                Change Password <IoMdArrowDropright className="text-red-600" />
              </motion.p>
            </Link>

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

      {showReceipt && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="border border-gray-400 rounded-xl p-6 w-full max-w-xs relative">
            <button
              onClick={handleCloseReceipt}
              className="absolute top-1 right-2 text-white text-3xl"
            >
              &times;
            </button>
            <div
              id="receipt-card"
              className="flex flex-col items-center rounded-xl bg-gray-900 p-5 shadow-lg"
            >
              <div className="flex justify-between w-full mb-2">
                <span className="text-3xl">🏋️‍♂️</span>

                <span className="text-3xl">🏋️‍♂️</span>
              </div>
              <h2 className="text-lg font-bold text-white mb-1">
                Wizzy Pro Gym
              </h2>
              <p className="text-gray-300 text-sm mb-1">{userInfo.email}</p>
              <p className="text-xl font-semibold text-white mb-2">
                {userInfo.nickname}
              </p>
              
                <p className="text-green-400 font-semibold">
                  {userInfo.subscription === "Active"
                    ? "Active Subscription"
                    : "Deactivated"}
                </p>
              

              <div className="flex justify-between w-full text-xs text-gray-400 mt-2">
                <span>Start Date</span>
                <span>End Date</span>
              </div>
              <div className="flex justify-between w-full text-base text-white font-mono">
                <span>
                  {userInfo.serviceStartDate
                    ? new Date(userInfo.serviceStartDate).toLocaleDateString()
                    : userInfo.createdAt
                    ? new Date(userInfo.createdAt).toLocaleDateString()
                    : "-"}
                </span>
                <span>
                  {userInfo.serviceEndDate
                    ? new Date(userInfo.serviceEndDate).toLocaleDateString()
                    : "-"}
                </span>
              </div>
            </div>
            <div className="flex justify-center mt-3">
              <motion.p
                onClick={handleDownloadReceipt}
                whileTap={{ scale: 0.7 }}
                className="px-5 py-2 bg-white flex w-fit font-semibold items-center gap-1 text-black rounded-xl cursor-pointer"
              >
                Download <IoMdArrowDropright className="text-red-600" />
              </motion.p>
            </div>
          </div>
        </div>
      )}

      {showChangeTrainer && (
        <ChangeTrainerModal
          onClose={() => setShowChangeTrainer(false)}
          onSendRequest={handleSendTrainerRequest}
          reviewing={reviewingTrainerRequest}
        />
      )}
    </div>
  );
};

export default page;
