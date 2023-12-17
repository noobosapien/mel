import Layout from "@/components/Layout";
import React from "react";
import p1 from "@/public/p1.jpg";
import p2 from "@/public/p2.jpg";
import p3 from "@/public/p3.jpg";
import p4 from "@/public/p4.jpg";
import p5 from "@/public/p5.jpg";
import p6 from "@/public/p6.jpg";
import p7 from "@/public/p7.jpg";
import p8 from "@/public/p8.jpg";
import { Grid } from "@mui/material";
import WorkCard from "@/components/common/WorkCard";

const images = [p1, p2, p3, p4, p5, p6, p7, p8];

export default function Work() {
  return (
    <>
      <Layout active="work">
        <Grid
          container
          justifyContent={"center"}
          spacing={10}
          sx={{ paddingTop: "4rem" }}
        >
          {images.map((img) => (
            <Grid item>
              <WorkCard image={img.src} />
            </Grid>
          ))}
        </Grid>
      </Layout>
    </>
  );
}
