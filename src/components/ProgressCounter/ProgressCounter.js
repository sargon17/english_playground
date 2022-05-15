import react from "react";
import Typography from "@mui/material/Typography";

export default function ProgressCounter({ progress, maxprogress }) {
  return (
    <>
      <Typography
        variant="points"
        sx={{
          color: "grey.normal_hover",
        }}
      >
        {progress} / {maxprogress}
      </Typography>
    </>
  );
}
