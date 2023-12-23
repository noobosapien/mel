import { styled } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Animate = styled("div")(({ theme }) => ({
  position: "absolute",
  width: "inherit",
  height: "inherit",

  background: "#292f3645",
  // left: 'calc(50%-75vw)',
  borderRadius: "45%",
  // animation: "rotate 10s infinite",

  "&::before": {
    content: '""',
    width: "100%",
    height: "100%",
    background: "#292f3632",
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: "40%",
    transform: "rotate(90)",
    // animation: "rotate 20s infinite",
  },

  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0)",
    },

    "100%": {
      transform: "rotate(360deg)",
    },
  },
}));

export default function Animation({ children }) {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div
      style={{
        position: "relative",
        // width: "100%",
        width: matchesMd ? "325px" : "600px",
        height: matchesMd ? "325px" : "600px",
        // maxWidth: 155,
      }}
    >
      <Animate style={{ zIndex: 0 }} />
      {children}
    </div>
  );
}
