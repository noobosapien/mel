import { Card, CardMedia, Fade } from "@mui/material";
import React from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";

export default function CircleCard({ image, alt }) {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Fade in timeout={1000}>
        <Card sx={{ borderWidth: "0" }} variant="outlined">
          <Image
            src={image}
            alt={alt}
            width={matchesMd ? 240 : 240}
            height={matchesMd ? 240 : 240}
            style={{
              borderRadius: "100%",
              borderWidth: "0",
            }}
          />
        </Card>
      </Fade>
    </>
  );
}
