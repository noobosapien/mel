import Layout from "@/components/Layout";
import Timeline from "@/components/about/timeline";
import { Grid, Typography } from "@mui/material";
import React, { createRef } from "react";

export default function About() {
  return (
    <>
      <Layout active="about">
        <Grid container direction={"column"} sx={{ marginTop: "4rem" }}>
          <Grid item container justifyContent={"center"}>
            <Grid item>
              <Typography variant="h3" sx={{ fontSize: "2rem" }}>
                Our Team
              </Typography>
            </Grid>

            <Grid item xs={12} />

            <Grid item container>
              <Grid item>{/* Avatar */}</Grid>
            </Grid>
          </Grid>

          <Grid item container justifyContent={"center"}>
            <Grid item>
              <Typography variant="h3" sx={{ fontSize: "2rem" }}>
                Timeline
              </Typography>
            </Grid>

            <Grid item xs={12} />

            <Grid item>
              <Timeline />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
