import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import SideMenu from "./common/SideMenu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Logo from "@/public/logo.png";

const pages = [
  { name: "Services", url: "/services" },
  { name: "Our Work", url: "/work" },
  { name: "About Us", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default function Layout({ active, title, description, children }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.up("md"));

  const router = useRouter();

  const handleRouteChange = (route) => (e) => {
    if (route !== active) router.push(`/${route}`);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  function addJsonLd() {
    return {
      __html: `
      {
        "@context": "https://schema.org/",
        "@type": "Service",
        "name": "Moorthi Engineering Limited Auckland",
        "image": [
          "https://moorthi.co.nz/2.png"
         ],
        "description": "Moorthi Engineering Limited savants at innovative craftsmanship, services include Welding, Fabricating, Fitting, and Rigging."
      }
  `,
    };
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addJsonLd()}
          key="product-jsonld"
        />
      </Head>

      <AppBar
        position="static"
        elevation={0}
        color="transparent"
        sx={(theme) => ({
          // background: theme.palette.common.slateDarkGray,
          marginBottom: "5rem",
        })}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link href={"/"} style={{ marginTop: "1rem" }}>
              <img
                src={Logo.src}
                style={{ width: matchesMD ? "10rem" : "5rem" }}
              />
            </Link>

            <Box
              sx={(theme) => ({
                mr: 2,
                flexGrow: 10,
                display: { xs: "flex" },
              })}
            />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <SideMenu />
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "space-around",
              }}
            >
              <Button
                variant={active === "services" ? "text" : "text"}
                sx={(theme) => ({
                  color: "#292f36",
                  borderBottom: active === "services" ? "0.4rem solid" : "",
                })}
                onClick={handleRouteChange("services")}
              >
                Services
              </Button>

              <Button
                variant={active === "work" ? "text" : "text"}
                sx={{
                  color: "#292f36",
                  borderBottom: active === "work" ? "0.4rem solid" : "",
                }}
                onClick={handleRouteChange("work")}
              >
                Our Work
              </Button>

              <Button
                variant={active === "about" ? "text" : "text"}
                sx={{
                  color: "#292f36",
                  borderBottom: active === "about" ? "0.4rem solid" : "",
                }}
                onClick={handleRouteChange("about")}
              >
                About Us
              </Button>

              <Button
                variant={active === "contact" ? "outlined" : "contained"}
                sx={(theme) => ({
                  backgroundColor:
                    active === "contact"
                      ? theme.palette.common.darkWhite
                      : theme.palette.common.slateGray,
                })}
                onClick={handleRouteChange("contact")}
              >
                <span
                  style={{ color: active === "contact" ? "#2A4747" : "#fff" }}
                >
                  Contact
                </span>
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {children}

      <footer>
        <Box
          sx={{
            borderTop: "solid #323a42",
            padding: "3rem 1rem",
            marginTop: "5rem",
          }}
        >
          <Grid
            container
            justifyContent={"center"}
            alignItems={"center"}
            direction={"column"}
            spacing={10}
          >
            <Grid item>
              <Typography
                sx={(theme) => ({
                  mr: 2,
                  flexGrow: 1,
                  display: { xs: "flex" },
                  fontSize: { xs: "1.0rem", md: "1.5rem" },
                  fontWeight: 300,
                  letterSpacing: ".3rem",
                  // color: '#fff',
                  textDecoration: "none",
                })}
              >
                Moorthi Engineering Limited &#169;
              </Typography>
            </Grid>

            <Grid item>
              <Typography sx={{ fontWeight: 100 }}>
                Site by: ArtisanCey
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </footer>
    </>
  );
}
