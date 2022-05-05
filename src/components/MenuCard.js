import React from "react";

import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import Typography from "@mui/material/Typography";

export default function MenuCard({ name }) {
  return (
    <>
      <Paper
        elevation={4}
        sx={{
          width: "100%",
          height: "100%",
          backgroundColor: "grey.dark",
          borderRadius: "border_radius",
          transition: "all 250ms ease-in-out",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "grey.dark_darker",
          },
        }}
      >
        <Box
          p={2}
          width={"100%"}
          sx={{
            width: "100%",
            minHeight: "130px",
            // backgroundColor: "grey.dark",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            "@media (min-width: 600px)": {
              minHeight: "206px",
            },
          }}
        >
          <Box
            height={"100%"}
            sx={{
              width: "100%",
              //   minHeight: "206px",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="title2"
              color={"grey.light_active"}
              textAlign={"center"}
            >
              {name}
            </Typography>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
