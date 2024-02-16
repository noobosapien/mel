import Layout from "@/components/Layout";
import { Divider, Grid, Typography } from "@mui/material";
import React, { createRef } from "react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function About() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Layout
        active="about"
        title="About Moorthi Engineering Limited where we excel in quality craftmanships across the welding industry in Auckland."
        description={
          "Our welding company prides itself on delivering exceptional results and consistently exceeding expectations, ensuring that we not only meet but surpass our promises to our valued clients."
        }
      >
        <Grid
          container
          justifyContent={"center"}
          spacing={10}
          sx={{ marginTop: "4rem" }}
        >
          <Grid item>
            <Typography variant="h1" textAlign={"center"}>
              About Moorthi Engineering Limited
            </Typography>
          </Grid>

          <Grid item xs={12} />

          <Grid item xs={10} md={4}>
            <Typography sx={{ fontWeight: 600, fontSize: "2rem" }}>
              Our welding company prides itself on delivering exceptional
              results and consistently exceeding expectations, ensuring that we
              not only meet but surpass our promises to our valued clients.
            </Typography>
          </Grid>

          <Grid item>
            <Divider
              sx={{
                backgroundColor: "#fff",
                display: matchesMd ? "none" : "block",
              }}
              orientation="vertical"
            />
          </Grid>

          <Grid item xs={10} md={5}>
            <Typography>
              Founded in 2017, our welding company stands as a testament to
              expertise, dedication, and a commitment to safety. <br />
              <br />
              Our team of highly skilled welders brings a wealth of experience
              to every project, ensuring precision and excellence in every weld.
              Specializing in not only welding but also fabrication, rigging,
              and fitting, we offer a comprehensive suite of services to meet
              the diverse needs of our clients. <br />
              <br />
              What sets us apart is our unwavering commitment to safety, making
              it a paramount consideration in every aspect of our work. We
              understand the critical importance of creating a secure and
              controlled environment in the welding process. This dedication to
              safety, combined with our technical prowess, has earned us a
              reputation for reliability and trust in the industry. <br />
              <br />
              As we continue to evolve and expand our capabilities, our focus on
              safety remains steadfast, making us the go-to choice for welding
              solutions that prioritize both quality and the well-being of our
              clients and our team.
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
