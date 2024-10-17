import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar({ theme, setTheme }) {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle profile dropdown
  const navigate = useNavigate(); // To navigate on dropdown click

  // Function to handle dropdown clicks
  const handleDropdownClick = (route) => {
    setDropdownOpen(false); // Close the dropdown
    navigate(route); // Navigate to the selected route
  };

  // Toggle between light (white) and dark (black) themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header
      className={`${
        theme === "light"
          ? "bg-blue-700 text-white"
          : "bg-gray-900 text-gray-100"
      } p-4 flex justify-between items-center`}
    >
      {/* Left Side - Logo or Title */}
      <div className="text-xl font-semibold">Hospital Management</div>

      {/* Right Side - Notifications, Profile, Dropdown */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle Switch */}
        <label className="flex items-center cursor-pointer">
          <span className="mr-3 font-medium">
            {theme === "light" ? "Light Mode" : "Dark Mode"}
          </span>
          <div className="relative">
            <input
              type="checkbox"
              checked={theme === "dark"}
              onChange={toggleTheme}
              className="sr-only"
            />
            <div className="block w-12 h-7 rounded-full bg-gray-400 shadow-inner"></div>
            <div
              className={`absolute left-1 top-1 w-5 h-5 rounded-full transition-transform duration-300 ease-in-out ${
                theme === "dark"
                  ? "transform translate-x-5 bg-black shadow-md"
                  : "bg-white shadow-lg"
              }`}
            ></div>
          </div>
        </label>

        {/* Notification Icon */}
        <div className="relative">
          {/* Replace with SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.019-1.64-5.637-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.64 5.363 6 7.981 6 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
        </div>

        {/* Profile & Dropdown */}
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              className="h-8 w-8 rounded-full"
              src="https://via.placeholder.com/150" // Replace with actual profile image
              alt="Profile"
            />
            {/* Replace with SVG Chevron icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <button
                onClick={() => handleDropdownClick("/settings")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
              >
                Settings
              </button>
              <button
                onClick={() => handleDropdownClick("/logout")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
