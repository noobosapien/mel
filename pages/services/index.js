import Layout from "@/components/Layout";
import WorkCard from "@/components/common/WorkCard";
import {
  Card,
  CardActionArea,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { createRef } from "react";
import p8 from "@/public/8.png";
import p10 from "@/public/10.png";
import p11 from "@/public/11.png";
import p12 from "@/public/12.png";
import Process from "@/components/services/process";
import Selection from "@/components/services/selection";

export default function Services() {
  const containerRef = createRef();

  const getRefChild = () => containerRef.current;

  const names = [
    "Welding",
    "Fitting",
    "Fabricating",
    "Rigging",
    "Something unique",
  ];

  return (
    <>
      <Layout active="services">
        <Grid
          container
          direction={"column"}
          alignItems={"center"}
          spacing={10}
          sx={{ marginTop: "1rem" }}
        >
          <Grid item alignSelf={"flex-start"} sx={{ marginLeft: "3rem" }}>
            <Selection names={names} />
          </Grid>

          <Grid item>
            <Typography variant="h1">Welding</Typography>
          </Grid>

          <Grid
            item
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={10}
          >
            <Grid item>
              <WorkCard image={p8.src} />
            </Grid>

            <Grid item md={5}>
              <Typography
                sx={{ fontSize: "1.5rem", fontWeight: "200" }}
                textAlign={"center"}
              >
                With few of the best Welders in the Auckland region, Moorthi
                brings his expertise over many years of welding with the ability
                to weld using Arc welders and MIG welders to deliver the finest
                quality possible.
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Typography sx={{ fontSize: "2rem" }} textAlign={"center"}>
              Our Welding process from blueprints to testing:
            </Typography>
          </Grid>

          <Grid item>
            <Process />
          </Grid>

          <Grid item>
            <Divider variant="middle" />
          </Grid>

          <Grid item>
            <Typography variant="h1">Fitting</Typography>
          </Grid>

          <Grid
            item
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={10}
          >
            <Grid item>
              <WorkCard image={p11.src} />
            </Grid>

            <Grid item md={5}>
              <Typography
                sx={{ fontSize: "1.5rem", fontWeight: "200" }}
                textAlign={"center"}
              >
                With mastery of joint preperation and assembling, Moorthi and
                the team are master fitters of any type of welded metal pipes.
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Divider variant="middle" />
          </Grid>

          <Grid item>
            <Typography variant="h1">Fabricating</Typography>
          </Grid>

          <Grid
            item
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={10}
          >
            <Grid item>
              <WorkCard image={p10.src} />
            </Grid>

            <Grid item md={5}>
              <Typography
                sx={{ fontSize: "1.5rem", fontWeight: "200" }}
                textAlign={"center"}
              >
                A complete end-to-end solution for all your fabrication needs,
                the most popular welded stainless steel hoses are most suitable
                for for thermal and seismic compensation.
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Divider variant="middle" />
          </Grid>

          <Grid item>
            <Typography variant="h1">Rigging</Typography>
          </Grid>

          <Grid
            item
            container
            justifyContent={"center"}
            alignItems={"center"}
            spacing={10}
          >
            <Grid item>
              <WorkCard image={p12.src} />
            </Grid>

            <Grid item md={5}>
              <Typography
                sx={{ fontSize: "1.5rem", fontWeight: "200" }}
                textAlign={"center"}
              >
                Rigging supplies for any pillar or column, and with expirienced
                riggers to get the job done right.
              </Typography>
            </Grid>
          </Grid>

          <Grid item>
            <Typography>Need a unique solution?</Typography>
          </Grid>
          <Grid item>
            <Typography>Contact us</Typography>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
