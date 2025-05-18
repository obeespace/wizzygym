import React, { useEffect, useState } from "react";
import { IoMdFitness } from "react-icons/io";
import { LuMoreVertical } from "react-icons/lu";
import { useRouter } from "next/navigation";
import { Toaster, toast } from 'sonner';
import axios from "axios";

const WorkoutCard = ({ workout }) => {
  const today = new Date();
  const [users, setUsers] = useState([]); 
  const router = useRouter();

  // Arrays for short day and month names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec",
  ];

  // Get day of the week, day of the month, month, and year
  const dayOfWeek = today.getDay();
  const dayName = dayNames[dayOfWeek];
  const dayOfMonth = today.getDate();
  const month = monthNames[today.getMonth()];

  // Map days of the week to workout categories
  const dayCategoryMap = {
    Mon: ["Chest", "Arms"],
    Tue: ["Shoulder", "Back"],
    Wed: ["Legs", "Abs"],
    Thu: ["Chest", "Arms"],
    Fri: ["Shoulder", "Back"],
    Sat: ["Legs", "Abs"],
    Sun: ["Rest"],
  };

  // Use dayName to get categories for today
  const categoriesForToday = dayCategoryMap[dayNames[dayOfWeek]] || [];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Unauthorized. Please log in.");
          router.push("/signin");
          return;
        }

        const response = await axios.get("api/auth/getAllWorkout", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data); // Set the workout data in state
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
        toast.error("Failed to fetch users. Check your connection or permissions.");
      }
    };

    fetchUsers();
  }, [router]);

  // Filter the exercises by today's categories
  const getRandomWorkouts = () => {
    const selectedExercises = [];

    categoriesForToday.forEach((category) => {
      const exercises = users.filter((exercise) => exercise.category === category);
      if (exercises.length > 0) {
        // Randomly pick one exercise from each category
        const randomExercise = exercises[Math.floor(Math.random() * exercises.length)];
        selectedExercises.push(randomExercise);
      }
    });

    return selectedExercises.slice(0, 3); // Ensure only 3 exercises are displayed
  };

  const workoutPlan = getRandomWorkouts(); // Generate today's workout plan

  return (
    <div className="rounded-xl border lg:w-3/12 mt-10 lg:mt-0 px-4 py-4 border-gray-600 bg-gray-950">
      <div className="border-b border-red-800 pb-3 flex justify-between items-center">
        <div className="flex gap-3"><div className="bg-white rounded-full px-1 py-1">
          <IoMdFitness className="text-black" />
        </div>
        <p>Home Work-Out Plans</p></div>
        {/* {localStorage.getItem('email') === "obeewon20@gmail.com" ? <LuMoreVertical /> : <></>} */}
      </div>

      <div className="mt-3 flex gap-3 items-center">
        <div className="px-6 py-5 border bg-white text-black rounded-full w-fit">
          <p>{dayOfMonth}</p>
        </div>
        <div>
          <p className="text-sm">
            {dayName} | {month}
          </p>
          <p className="text-lg font-semibold -mt-1">
            {categoriesForToday.join(" & ")}
          </p>
        </div>
      </div>

      {/* Display the workout plan */}
      <div className="mt-5">
        {workoutPlan.map((exercise, index) => (
          <div key={index} className="mt-5">
            <p className="text-right">{exercise.name} x{exercise.reps}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutCard;
