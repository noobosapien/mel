import Layout from "@/components/Layout";
import { Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import React, { createRef, useEffect, useState } from "react";

export default function Contact() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Layout active="contact">
        <Grid
          container
          justifyContent={"center"}
          spacing={10}
          sx={{ marginTop: "6rem" }}
        >
          <Grid item>
            <Grid container direction="column" spacing={10}>
              <Grid item>
                <Typography variant="h5">Location</Typography>
              </Grid>

              <Grid item>
                <Typography>
                  Moorthi Engineering Limited, <br />
                  5/98 Princes Street, <br />
                  Ōtāhuhu, <br />
                  Auckland 1062
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.971952286796!2d174.84729537659925!3d-36.93883747220799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4eaf65c827c3%3A0x76d1cca6fd1f6618!2s5%2F98%20Princes%20Street%2C%20%C5%8Ct%C4%81huhu%2C%20Auckland%201062!5e0!3m2!1sen!2snz!4v1703058865403!5m2!1sen!2snz"
              width={matchesMd ? "340" : "600"}
              height="450"
              style={{ border: 0, borderRadius: "3rem" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>

          <Grid item xs={12} />

          <Grid item>
            <Typography>
              Email: admin@moorthi.co.nz
              <br />
              <br />
              Phone: 022 322 6496
            </Typography>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}
