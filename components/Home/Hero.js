import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Animation from "./Animation";
import { useRouter } from "next/router";
import Video from "./Video";

export default function Hero() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  const router = useRouter();

  const handleRouteChange = (route) => (e) => {
    router.push(`/${route}`);
  };

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
            spacing={2}
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
                Fabricating/Fitting and Rigging.
              </Typography>
            </Grid>

            <Grid item xs={12} />

            <Grid item>
              <Button variant="contained" onClick={handleRouteChange("about")}>
                About us
              </Button>
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                onClick={handleRouteChange("contact")}
              >
                Contact us
              </Button>
            </Grid>
          </Grid>
        </div>
        <Video />
      </div>
    </>
  );
}
