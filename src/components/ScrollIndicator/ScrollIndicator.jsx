// src/components/ScrollIndicator/ScrollIndicator.jsx
import React from "react";
import { Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const ScrollIndicator = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 20,
        left: "50%",
        transform: "translateX(-50%)",
        color: "white",
        animation: "bounce 2s infinite",
        cursor: "pointer",
        zIndex: 5
      }}
      onClick={() => {
        const nextSection = document.getElementById("hero-carousel");
        if (nextSection) {
          nextSection.scrollIntoView({ behavior: "smooth" });
        }
      }}
    >
      <KeyboardArrowDownIcon sx={{ fontSize: 40 }} />
    </Box>
  );
};

export default ScrollIndicator;
