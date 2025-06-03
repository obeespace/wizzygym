"use client";
import React, { useState, useEffect } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { IoShareSocial } from "react-icons/io5";

const FloatingSocials = () => {
  const [showSocials, setShowSocials] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    if (isMobile) {
      setShowSocials(!showSocials);
    }
  };

  return (
    <div
      className="fixed lg:bottom-10 bottom-5 lg:right-10 right-5 flex flex-col items-center"
      onMouseEnter={() => !isMobile && setShowSocials(true)}
      onMouseLeave={() => !isMobile && setShowSocials(false)}
    >
      {showSocials && (
        <div className="flex flex-col items-center gap-3 mb-3">
          <a
            href="https://github.com/obeespace"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-black rounded-full p-3 hover:bg-gray-100"
          >
            <FaGithub size={24} className="text-gray-800 hover:text-gray-900" />
          </a>
          <a
            href="https://instagram.com/0beenna"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-black rounded-full p-3 hover:bg-gray-100"
          >
            <FaInstagram size={24} className="text-pink-500 hover:text-pink-700" />
          </a>
          <a
            href="https://www.linkedin.com/in/obinna-ugwu-04b0a617b/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-black rounded-full p-3 hover:bg-gray-100"
          >
            <FaTiktok  size={24} className="text-black hover:text-blue-900" />
          </a>
        </div>
      )}
      <button
        className="bg-white shadow-black rounded-full p-4 shadow-md hover:bg-gray-300"
        onClick={handleToggle}
      >
        <IoShareSocial className="text-black" size={24} />
      </button>
    </div>
  );
};

export default FloatingSocials;