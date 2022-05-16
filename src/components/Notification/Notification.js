import React from "react";
import "../../dist/css/Notification.css";

export default function Notification({ message, type }) {
  let notificationClasses = ["notification", type];

  return (
    <div className={notificationClasses.join(" ")}>
      <div className="notification-content">
        <p className="notification-text">{message}</p>
      </div>
    </div>
  );
}
