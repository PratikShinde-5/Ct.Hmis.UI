import React, { useState } from "react";

const NotificationDrawer = ({ isOpen, onClose }) => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Appointment for 02 Jan 2024 at 11:00 AM cancelled", read: false },
    { id: 2, message: "Appointment for 02 Jan 2024 at 11:50 AM cancelled", read: false },
    { id: 3, message: "Kumar's appointment for 25 Jan 2024 at 4:50 PM cancelled", read: false },
    { id: 4, message: "Doctor appointment for 12 Jan 2024 at 11:50 AM cancelled", read: false },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>

      {/* Notification Drawer */}
      <div className="absolute right-0 bg-white w-80 h-full p-4 shadow-lg overflow-y-auto">
        <div className="font-bold text-lg border-b pb-2 mb-2">Notifications</div>

        <ul>
          {notifications.map((notification) => (
            <li key={notification.id} className={`px-4 py-2 text-sm ${notification.read ? "text-gray-500" : "text-gray-700 hover:bg-gray-200"}`}>
              <div className="flex justify-between items-center">
                <span>{notification.message}</span>
                {!notification.read && (
                  <button
                    className="text-blue-600 text-xs"
                    onClick={() => markAsRead(notification.id)}
                  >
                    Mark as read
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>

        <div className="border-t pt-2 mt-2">
          <button className="text-blue-600" onClick={() => setNotifications(notifications.map((n) => ({ ...n, read: true })))}>
            Mark all as read
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationDrawer;
