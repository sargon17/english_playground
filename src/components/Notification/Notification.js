import React, { useState, useEffect } from "react";
import "../../dist/css/Notification.css";

export default function Notification({ message, type, position, duration }) {
  let [notificationClasses, setNotificationClasses] = useState([
    "notification",
    type,
    position ? "notification-" + position : "notification-top",
  ]);

  useEffect(() => {
    setTimeout(
      () => {
        setNotificationClasses((prev) => [...prev, "notification-hide"]);
      },
      duration ? duration : 2000
    );
  }, []);

  return (
    <div className={notificationClasses.join(" ")}>
      <div className="notification-content">
        <p className="notification-text">{message}</p>
      </div>
    </div>
  );
}
