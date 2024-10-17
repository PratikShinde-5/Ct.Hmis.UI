// src/components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const sidebarItems = [
  { icon: "📊", label: "Patient", route: "/patients" },
  { icon: "💉", label: "Vaccinations", route: "/vaccinations" },
  {
    icon: "🏥",
    label: "Vendor Management system",
    route: "/vendor-management",
  },
  { icon: "📝", label: "Referrals", route: "/referrals" },
  { icon: "📅", label: "Follow-up Log", route: "/follow-up-log" },
  { icon: "💰", label: "Cashbacks", route: "/cashbacks" },
  { icon: "📈", label: "Reports", route: "/reports" },
  { icon: "💊", label: "Drugs", route: "/drugs" },
  { icon: "🧰", label: "Consumables", route: "/consumables" },
];

const Sidebar = () => {
  return (
    <aside className="w-28 bg-blue-700 text-white flex flex-col">
      <div className="p-4 text-2xl font-bold">doCterz</div>
      <div className="flex-grow">
        {sidebarItems.map((item, index) => (
          <Link to={item.route} key={index} className="w-full">
            <div
              className={`flex flex-col flex-grow items-center p-4 ${
                index === 0 ? "bg-blue-800" : ""
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="text-xs">{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
