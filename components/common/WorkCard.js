import { Card, CardMedia, Fade } from "@mui/material";
import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function WorkCard({ image }) {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Fade in timeout={1000}>
        <Card>
          <CardMedia
            component="img"
            alt="work"
            height={matchesMd ? "340" : "640"}
            image={image}
            sx={{ borderRadius: "1rem" }}
          />
        </Card>
      </Fade>
    </>
  );
}
