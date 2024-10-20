import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TopBar({ theme, setTheme, onNotificationClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <header className={`${
        theme === "light" ? "bg-blue-700 text-white" : "bg-gray-900 text-gray-100"
      } p-4 flex justify-between items-center`}>
      
      {/* Left Side - Buttons */}
      <div className="flex items-center space-x-4">
        <button className="px-3 py-1 bg-blue-600 rounded-md text-white" onClick={() => navigate("/admin-account")}>
          Admin Account
        </button>
        <button className="px-3 py-1 bg-blue-600 rounded-md text-white" onClick={() => navigate("/business-analytics")}>
          Business Analytics
        </button>
        <button className="px-3 py-1 bg-blue-600 rounded-md text-white" onClick={() => navigate("/help")}>
          Help
        </button>
      </div>

      {/* Right Side - Notification Icon, Theme Toggle, Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          onClick={onNotificationClick} // Trigger external notification drawer
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.019-1.64-5.637-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.64 5.363 6 7.981 6 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`${
            theme === "light" ? "text-black" : "text-white"
          } px-4 py-2 rounded-md`}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>

        {/* Profile Dropdown */}
        <div className="relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="Profile" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
              <button
                onClick={() => navigate("/profile")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
              >
                Profile
              </button>
              <button
                onClick={() => navigate("/settings")}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
              >
                Settings
              </button>
              <button
                onClick={() => navigate("/logout")}
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



// import React, { useState, useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// export default function TopBar({ theme, setTheme }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [notificationOpen, setNotificationOpen] = useState(false); // State for notification box
//   const navigate = useNavigate();
//   const notificationRef = useRef(null); // Reference to detect clicks outside

//   // Function to handle dropdown clicks
//   const handleDropdownClick = (route) => {
//     setDropdownOpen(false);
//     navigate(route);
//   };

//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   // Close notification box when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         notificationRef.current &&
//         !notificationRef.current.contains(event.target)
//       ) {
//         setNotificationOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <header
//       className={`${
//         theme === "light"
//           ? "bg-blue-700 text-white"
//           : "bg-gray-900 text-gray-100"
//       } p-4 flex justify-between items-center`}
//     >
//       {/* Left Side - Buttons */}
//       <div className="flex items-center space-x-4">
//         {/* Admin Account Button */}
//         <button
//           className="px-3 py-1 bg-blue-600 rounded-md text-white"
//           onClick={() => navigate("/admin-account")}
//         >
//           Admin Account
//         </button>

//         {/* Business Analytics Button */}
//         <button
//           className="px-3 py-1 bg-blue-600 rounded-md text-white"
//           onClick={() => navigate("/business-analytics")}
//         >
//           Business Analytics
//         </button>

//         {/* Support Button */}
//         <button
//           className="px-3 py-1 bg-blue-600 rounded-md text-white"
//           onClick={() => navigate("/support")}
//         >
//           Support
//         </button>
//       </div>

//       {/* Right Side - Notification Icon, Theme Toggle, and Profile */}
//       <div className="flex items-center space-x-4">
//         {/* Notification Icon */}
//         <div className="relative" ref={notificationRef}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 cursor-pointer"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//             onClick={() => setNotificationOpen(!notificationOpen)}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.019-1.64-5.637-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.64 5.363 6 7.981 6 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//             />
//           </svg>

//           {/* Notification Box */}
//           {notificationOpen && (
//             <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-2 z-20">
//               <div className="px-4 py-2 text-sm font-semibold text-gray-800 border-b">
//                 You have 4 unread notifications
//               </div>
//               <ul className="overflow-y-auto max-h-60">
//                 {/* Notifications */}
//                 <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
//                   Appointment for 02 Jan 2024 at 11:00 AM cancelled
//                 </li>
//                 <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
//                   Appointment for 02 Jan 2024 at 11:50 AM cancelled
//                 </li>
//                 <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
//                   Kumar's appointment for 25 Jan 2024 at 4:50 PM cancelled
//                 </li>
//                 <li className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-200">
//                   Doctor appointment for 12 Jan 2024 at 11:50 AM cancelled
//                 </li>
//               </ul>
//               <div className="px-4 py-2 text-sm border-t flex justify-between">
//                 <button className="text-blue-600">Mark all as read</button>
//                 <button className="text-blue-600">Show all notifications</button>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Theme Toggle */}
//         <button
//           onClick={toggleTheme}
//           className={`${
//             theme === "light" ? "text-black" : "text-white"
//           } px-4 py-2 rounded-md`}
//         >
//           {theme === "light" ? "Dark Mode" : "Light Mode"}
//         </button>

//         {/* Profile & Dropdown */}
//         <div className="relative">
//           <div
//             className="flex items-center cursor-pointer"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           >
//             <img
//               className="h-8 w-8 rounded-full"
//               src="https://via.placeholder.com/150"
//               alt="Profile"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 ml-1"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </div>

//           {/* Dropdown Menu */}
//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
//               <button
//                 onClick={() => handleDropdownClick("/profile")}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
//               >
//                 Profile
//               </button>
//               <button
//                 onClick={() => handleDropdownClick("/settings")}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
//               >
//                 Settings
//               </button>
//               <button
//                 onClick={() => handleDropdownClick("/logout")}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function TopBar({ theme, setTheme }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle profile dropdown
//   const navigate = useNavigate(); // To navigate on dropdown click

//   // Function to handle dropdown clicks
//   const handleDropdownClick = (route) => {
//     setDropdownOpen(false); // Close the dropdown
//     navigate(route); // Navigate to the selected route
//   };

//   // Toggle between light (white) and dark (black) themes
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <header
//       className={`${
//         theme === "light"
//           ? "bg-blue-700 text-white"
//           : "bg-gray-900 text-gray-100"
//       } p-4 flex justify-between items-center`}
//     >
//       {/* Left Side - Admin, Business Analytics, Support */}
//       <div className="flex space-x-6">
//         <button
//           onClick={() => navigate("/admin-account")}
//           className="text-sm font-medium hover:underline"
//         >
//           Admin Account
//         </button>
//         <button
//           onClick={() => navigate("/business-analytics")}
//           className="text-sm font-medium hover:underline"
//         >
//           Business Analytics
//         </button>
//         <button
//           onClick={() => navigate("/support")}
//           className="text-sm font-medium hover:underline"
//         >
//           Support
//         </button>
//       </div>

//       {/* Right Side - Notifications, Profile, Dropdown, Theme Toggle */}
//       <div className="flex items-center space-x-4">
//         {/* Theme Toggle Switch */}
//         <label className="flex items-center cursor-pointer">
//           <span className="mr-3 font-medium">
//             {theme === "light" ? "Light Mode" : "Dark Mode"}
//           </span>
//           <div className="relative">
//             <input
//               type="checkbox"
//               checked={theme === "dark"}
//               onChange={toggleTheme}
//               className="sr-only"
//             />
//             <div className="block w-12 h-7 rounded-full bg-gray-400 shadow-inner"></div>
//             <div
//               className={`absolute left-1 top-1 w-5 h-5 rounded-full transition-transform duration-300 ease-in-out ${
//                 theme === "dark"
//                   ? "transform translate-x-5 bg-black shadow-md"
//                   : "bg-white shadow-lg"
//               }`}
//             ></div>
//           </div>
//         </label>

//         {/* Notification Icon */}
//         <div className="relative">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 cursor-pointer"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.019-1.64-5.637-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.64 5.363 6 7.981 6 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//             />
//           </svg>
//         </div>

//         {/* Help Icon
//         <div className="relative">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 cursor-pointer"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 8c-1.657 0-3 1.343-3 3h2c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1c-1.105 0-2 .895-2 2h2c0-.552.448-1 1-1s1 .448 1 1-.448 1-1 1v1h2v-1c0-1.105-.895-2-2-2 .552 0 1-.448 1-1s.448-1 1-1 .895-1.343.895-3c0-1.657-1.343-3-3-3z"
//             />
//           </svg>
//         </div> */}

//         {/* Profile & Dropdown */}
//         <div className="relative">
//           <div
//             className="flex items-center cursor-pointer"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           >
//             <img
//               className="h-8 w-8 rounded-full"
//               src="https://via.placeholder.com/150" // Replace with actual profile image
//               alt="Profile"
//             />
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 ml-1"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
//             </svg>
//           </div>

//           {/* Dropdown Menu */}
//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
//               <button
//                 onClick={() => handleDropdownClick("/profile")}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
//               >
//                 Profile
//               </button>
//               <button
//                 onClick={() => handleDropdownClick("/settings")}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
//               >
//                 Settings
//               </button>
//               <button
//                 onClick={() => handleDropdownClick("/logout")}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }




//without topbar itsmms
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function TopBar({ theme, setTheme }) {
//   const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle profile dropdown
//   const navigate = useNavigate(); // To navigate on dropdown click

//   // Function to handle dropdown clicks
//   const handleDropdownClick = (route) => {
//     setDropdownOpen(false); // Close the dropdown
//     navigate(route); // Navigate to the selected route
//   };

//   // Toggle between light (white) and dark (black) themes
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
//   };

//   return (
//     <header
//       className={`${
//         theme === "light"
//           ? "bg-blue-700 text-white"
//           : "bg-gray-900 text-gray-100"
//       } p-4 flex justify-between items-center`}
//     >
//       {/* Left Side - Logo or Title */}
//       <div className="text-xl font-semibold">Hospital Management</div>

//       {/* Right Side - Notifications, Profile, Dropdown */}
//       <div className="flex items-center space-x-4">
//         {/* Theme Toggle Switch */}
//         <label className="flex items-center cursor-pointer">
//           <span className="mr-3 font-medium">
//             {theme === "light" ? "Light Mode" : "Dark Mode"}
//           </span>
//           <div className="relative">
//             <input
//               type="checkbox"
//               checked={theme === "dark"}
//               onChange={toggleTheme}
//               className="sr-only"
//             />
//             <div className="block w-12 h-7 rounded-full bg-gray-400 shadow-inner"></div>
//             <div
//               className={`absolute left-1 top-1 w-5 h-5 rounded-full transition-transform duration-300 ease-in-out ${
//                 theme === "dark"
//                   ? "transform translate-x-5 bg-black shadow-md"
//                   : "bg-white shadow-lg"
//               }`}
//             ></div>
//           </div>
//         </label>

//         {/* Notification Icon */}
//         <div className="relative">
//           {/* Replace with SVG icon */}
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 cursor-pointer"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11c0-3.019-1.64-5.637-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.64 5.363 6 7.981 6 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//             />
//           </svg>
//         </div>

//         {/* Profile & Dropdown */}
//         <div className="relative">
//           <div
//             className="flex items-center cursor-pointer"
//             onClick={() => setDropdownOpen(!dropdownOpen)}
//           >
//             <img
//               className="h-8 w-8 rounded-full"
//               src="https://via.placeholder.com/150" // Replace with actual profile image
//               alt="Profile"
//             />
//             {/* Replace with SVG Chevron icon */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-4 w-4 ml-1"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </div>

//           {/* Dropdown Menu */}
//           {dropdownOpen && (
//             <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">

//               <button
//                 onClick={() => handleDropdownClick("/profile")}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
//               >
//                 Profile
//               </button>
//               <button
//                 onClick={() => handleDropdownClick("/settings")}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
//               >
//                 Settings
//               </button>
//               <button
//                 onClick={() => handleDropdownClick("/logout")}
//                 className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 w-full text-left"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

