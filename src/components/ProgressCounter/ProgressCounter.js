import React from "react";
import Typography from "@mui/material/Typography";

export default function ProgressCounter({ progress, maxProgress }) {
  return (
    <>
      <Typography
        variant="points"
        sx={{
          color: "grey.normal_hover",
        }}
      >
        {progress} / {maxProgress}
      </Typography>
    </>
  );
}
