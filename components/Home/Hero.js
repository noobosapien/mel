import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Animation from "./Animation";

export default function Hero() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div style={{ position: "relative" }}>
        <div
          style={{
            bottom: "20%",
            position: "absolute",
            // background: "rgba(0, 0, 0, 0.5)",
            width: "100%",
            padding: "20px",
            zIndex: 1,
          }}
        >
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={4}
          >
            <Grid item>
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  opacity: 1,
                  fontSize: matchesMd ? "1.4rem" : "2.4rem",
                  fontWeight: 700,
                  textShadow:
                    "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;",
                }}
                textAlign={"end"}
              >
                Auckland based
              </Typography>
            </Grid>

            <Grid item xs={12} />

            <Grid item>
              <Typography
                variant="h1"
                sx={{
                  color: "#fff",
                  opacity: 1,
                  fontSize: matchesMd ? "1.2rem" : "1.6rem",
                  fontWeight: 500,
                  textShadow:
                    "1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;",
                }}
                textAlign={"center"}
              >
                Welders/Fabricators <br /> Specializing in Arc welding, MIG
                Welding, <br />
                Fabricating and Rigging.
              </Typography>
            </Grid>

            <Grid item xs={12} />

            <Grid item>
              <Button variant="contained">About us</Button>
            </Grid>

            <Grid item>
              <Button variant="outlined">Contact us</Button>
            </Grid>
          </Grid>
        </div>
        <video
          autoPlay
          muted
          loop
          id="hero"
          style={{
            // marginTop: "8rem",
            // position: "fixed",
            zIndex: -1,
            height: "auto",
            maxHeight: "80vh",
            minHeight: "40vh",
            width: "100vw",
            objectFit: "cover",
            // backgroundPosition: "center",
            opacity: 0.7,
            left: 0,
            top: 0,
            bottom: 0,
            // filter: "grayscale(80%)",
            // clipPath: "polygon(28% 0, 100% 0, 95% 100%, 0% 100%)",
            // borderRadius: "4%",
          }}
        >
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
