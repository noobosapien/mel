import { Card, CardMedia, Fade } from "@mui/material";
import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function CircleCard({ image }) {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Fade in timeout={1000}>
        <Card sx={{ borderWidth: "0" }} variant="outlined">
          <CardMedia
            component="img"
            alt="work"
            height={matchesMd ? "240" : "240"}
            image={image}
            sx={{ borderRadius: "100%", borderWidth: "0" }}
          />
        </Card>
      </Fade>
    </>
  );
}
