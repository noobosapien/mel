import { Inter } from "@next/font/google";
import Layout from "@/components/Layout";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ph from "@/public/1.png";
import ph1 from "@/public/2.png";
import ph2 from "@/public/3.png";
import ph14 from "@/public/14.png";
import ph13 from "@/public/13.png";
import ph15 from "@/public/15.png";
import ph16 from "@/public/16.png";
import CircleCard from "@/components/common/CircleCard";
import Background from "@/components/Home/Background";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleRouteChange = (route) => (e) => {
    router.push(`/${route}`);
  };

  return (
    <Layout>
      <Grid
        container
        direction="row"
        sx={{ marginTop: "4rem" }}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={10}
      >
        <Grid item sx={{ borderRadius: "0%", height: "80vh" }}>
          <Grid container>
            <Grid item>
              <Box
                sx={{
                  position: "relative",
                  width: matchesMd ? "100vw" : "50vw",
                }}
              >
                <Card
                  sx={{
                    position: "absolute",
                    top: matchesMd ? "1rem" : "0rem",
                    left: matchesMd ? "1rem" : "0rem",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="work"
                    height={matchesMd ? "200" : "440"}
                    image={ph.src}
                    sx={{ borderRadius: "2rem" }}
                  />
                </Card>

                <Card
                  sx={{ position: "absolute", top: "18rem", left: "16rem" }}
                >
                  <CardMedia
                    component="img"
                    alt="work"
                    height={matchesMd ? "240" : "440"}
                    image={ph2.src}
                    sx={{ borderRadius: "2rem" }}
                  />
                </Card>

                <Card
                  sx={{
                    position: "absolute",
                    top: matchesMd ? "10rem" : "20rem",
                    left: matchesMd ? "5rem" : "-5rem",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="work"
                    height={matchesMd ? "260" : "480"}
                    image={ph1.src}
                    sx={{ borderRadius: "2rem" }}
                  />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
            spacing={10}
          >
            <Grid item>
              <Typography variant="h3" textAlign={"center"}>
                Auckland based
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="h4"
                textAlign={"center"}
                sx={{ fontWeight: "100", fontSize: "2rem" }}
              >
                Welders/Fabricators <br /> Specializing in Arc welding, MIG
                Welding, <br />
                Fabricating and Rigging.
              </Typography>
            </Grid>

            <Grid item>
              <Typography
                variant="h4"
                textAlign={"center"}
                sx={{ fontWeight: "100", fontSize: "2rem" }}
              ></Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "10rem" }} />

        <Grid
          item
          container
          justifyContent={"center"}
          alignItems={"center"}
          direction={"column"}
          spacing={10}
        >
          <Grid item>
            <Typography
              variant="h3"
              sx={{ fontSize: "2.5rem", fontWeight: 700 }}
              textAlign={"center"}
            >
              Industries we work on.
            </Typography>
          </Grid>

          <Grid item>
            <Grid container justifyContent={"center"} spacing={10}>
              <Grid item>
                <Grid
                  container
                  direction={"row"}
                  justifyContent={"center"}
                  spacing={8}
                >
                  <Grid item>
                    <Grid container direction={"column"} spacing={4}>
                      <Grid item>
                        <CircleCard image={ph14.src} />
                      </Grid>
                      <Grid item>
                        <Typography
                          textAlign="center"
                          sx={{ fontWeight: 400, fontSize: "1.5rem" }}
                        >
                          Marine
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container direction={"column"} spacing={4}>
                      <Grid item>
                        <CircleCard image={ph13.src} />
                      </Grid>
                      <Grid item>
                        <Typography
                          textAlign="center"
                          sx={{ fontWeight: 400, fontSize: "1.5rem" }}
                        >
                          Construction
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container direction={"column"} spacing={4}>
                      <Grid item>
                        <CircleCard image={ph15.src} />
                      </Grid>

                      <Grid item>
                        <Typography
                          textAlign="center"
                          sx={{ fontWeight: 400, fontSize: "1.5rem" }}
                        >
                          Architectural
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid container direction={"column"} spacing={4}>
                      <Grid item>
                        <CircleCard image={ph16.src} />
                      </Grid>

                      <Grid item>
                        <Typography
                          textAlign="center"
                          sx={{ fontWeight: 400, fontSize: "1.5rem" }}
                        >
                          Residential
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "10rem" }} />

        <Grid item>
          <Background>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              spacing={10}
              sx={{ paddingBottom: "5rem" }}
            >
              <Grid item>
                <Grid
                  container
                  direction={"column"}
                  spacing={10}
                  justifyContent={"center"}
                >
                  <Grid item>
                    <Typography
                      sx={{
                        background: "none",
                        textShadow: "#000 10px 0 10px",
                        fontSize: "2rem",
                        fontWeight: 600,
                      }}
                    >
                      Success driven approach.
                    </Typography>
                  </Grid>

                  <Grid item>
                    <Typography
                      sx={{
                        background: "none",
                        textShadow: "#000 10px 0 10px",
                        fontWeight: 300,
                      }}
                    >
                      At our welding company, success is not just a goal; <br />
                      it's a constant pursuit, driving us to consistently
                      deliver unparalleled <br />
                      craftsmanship and exceed expectations in every weld.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item>
                <Grid container direction={"column"}>
                  <Grid item>
                    <Paper sx={{ width: 320, maxWidth: "100%" }}>
                      <Typography
                        sx={{
                          background: "none",
                          textShadow: "#000 10px 0 10px",
                          fontWeight: 600,
                        }}
                      >
                        Our most important values:
                      </Typography>
                      <List
                        sx={{
                          width: "100%",
                          maxWidth: 360,
                          bgcolor: "background.paper",
                        }}
                      >
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <NewReleasesIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primaryTypographyProps={{
                              sx: {
                                background: "none",
                                textShadow: "#000 10px 0 10px",
                                fontWeight: 300,
                              },
                            }}
                            primary="Innovation"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <HealthAndSafetyIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primaryTypographyProps={{
                              sx: {
                                background: "none",
                                textShadow: "#000 10px 0 10px",
                                fontWeight: 300,
                              },
                            }}
                            primary="Safety"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <Diversity3Icon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primaryTypographyProps={{
                              sx: {
                                background: "none",
                                textShadow: "#000 10px 0 10px",
                                fontWeight: 300,
                              },
                            }}
                            primary="Teamwork"
                          />
                        </ListItem>
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar>
                              <ManageAccountsIcon />
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primaryTypographyProps={{
                              sx: {
                                background: "none",
                                textShadow: "#000 10px 0 10px",
                                fontWeight: 300,
                              },
                            }}
                            primary="Project Management"
                          />
                        </ListItem>
                      </List>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Background>
        </Grid>

        <Grid
          container
          item
          direction={"column"}
          alignItems={"center"}
          spacing={10}
          sx={{ marginTop: "5rem" }}
        >
          <Grid item>
            <Typography
              variant="h3"
              sx={{ fontSize: "2.5rem", fontWeight: 100 }}
              textAlign={"center"}
            >
              Delivering customised solutions for every client, contact us for
              more information.
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="contained" onClick={handleRouteChange("contact")}>
              Contact us
            </Button>
          </Grid>
        </Grid>

        <Grid item xs={12} sx={{ marginBottom: "10rem" }} />
      </Grid>
    </Layout>
  );
}
