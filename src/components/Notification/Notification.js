import React, { useState, useEffect } from "react";
import "../../dist/css/Notification.css";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import ErrorIcon from "@mui/icons-material/Error";
import CampaignIcon from "@mui/icons-material/Campaign";

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

  function setIcon() {
    switch (type) {
      case "success":
        return (
          <DoneAllIcon
            sx={{
              color: "#fff",
            }}
          />
        );
      case "error":
        return (
          <ErrorIcon
            sx={{
              color: "#fff",
            }}
          />
        );
      case "warning":
        return (
          <ReportProblemIcon
            sx={{
              color: "#fff",
            }}
          />
        );
      default:
        return (
          <CampaignIcon
            sx={{
              color: "#fff",
            }}
          />
        );
    }
  }

  return (
    <div className={notificationClasses.join(" ")}>
      <div className="notification-icon">{setIcon()}</div>
      <div className="notification-content">
        <p className="notification-text">{message}</p>
      </div>
    </div>
  );
}
