import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Patients from "./components/Patients";
import TopBar from "./components/Topbar"; // Import the TopBar component

export default function App() {
  const [theme, setTheme] = useState("light"); // Default theme is "light"

  return (
    <div
      className={`${theme === "light" ? "bg-white" : "bg-black"} text-gray-800`}
    >
      <Router>
        <div className="flex h-screen">
          <Sidebar /> {/* Sidebar Component */}
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopBar theme={theme} setTheme={setTheme} />{" "}
            {/* Use the TopBar Component */}
            {/* Main content */}
            <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
              <Routes>
                {/* Same component for all routes for now */}
                <Route path="/patients" element={<Patients />} />
                <Route path="/vaccinations" element={<Patients />} />
                <Route path="/vendor-management" element={<Patients />} />
                {/* Add more routes */}
              </Routes>
            </main>
          </div>
        </div>
      </Router>
    </div>
  );
}
