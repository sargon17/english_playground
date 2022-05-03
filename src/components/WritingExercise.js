import React from "react";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function WritingExercise() {
  return (
    <>
      <Paper elevation={10}>
        <Box
          sx={{
            backgroundColor: "grey.dark",
            borderRadius: "11px",
            width: "95%",
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "0%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              textAlign: "center",
            }}
          >
            <Typography
              variant="title"
              color={"grey.lighter"}
              textAlign={"center"}
            >
              Writing Exercise
            </Typography>
            <Box>
              <Typography variant="title2" color={"grey.normal"}>
                Write a sentence using the following words:
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
