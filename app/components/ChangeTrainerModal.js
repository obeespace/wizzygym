import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

const trainers = [
  "jon",
  "wisdom",
  "panther",
];

const ChangeTrainerModal = ({ onClose, onSendRequest, reviewing }) => {
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const [reason, setReason] = useState("");

  const handleSend = async () => {
    await onSendRequest(selectedTrainer, reason);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <div className="border border-gray-400 rounded-xl p-6 w-full max-w-xs relative bg-gray-900">
        <button
          onClick={onClose}
          className="absolute top-1 right-2 text-white text-3xl"
        >
          &times;
        </button>
        <h2 className="text-lg font-bold text-white mb-4 text-center">Change Trainer</h2>
        <div className="mb-4">
          <label className="block text-white mb-1">Select Trainer</label>
          <select
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            value={selectedTrainer}
            onChange={e => setSelectedTrainer(e.target.value)}
          >
            <option value="">-- Choose Trainer --</option>
            {trainers.map(tr => (
              <option key={tr} value={tr}>{tr}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1">Reason</label>
          <textarea
            className="w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none"
            rows={3}
            value={reason}
            onChange={e => setReason(e.target.value)}
            placeholder="Why do you want to change your trainer?"
          />
        </div>
        <div className="flex justify-between mt-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="px-4 py-2 border text-white border-white text-black rounded-xl font-semibold"
          >
            Cancel
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleSend}
            className={`px-4 py-2 rounded-xl font-semibold ${reviewing ? "bg-gray-500 text-white" : "bg-white text-black"}`}
            disabled={reviewing || !selectedTrainer || !reason}
          >
            {reviewing ? "Reviewing Request" : "Send Request"}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ChangeTrainerModal;
