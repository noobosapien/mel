import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { IconButton } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter } from "next/router";

const pages = [
  { name: "Services", url: "/services" },
  { name: "Our Work", url: "/work" },
  { name: "About Us", url: "/about" },
  { name: "Contact", url: "/contact" },
];

export default function SideMenu() {
  const [openState, setOpenState] = useState(false);

  const router = useRouter();

  const handleRouteChange = (route) => (e) => {
    router.push(`${route}`);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpenState(open);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 320 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {pages.map((page, index) => (
          <ListItem key={`${page.url}-menu`}>
            <ListItemButton onClick={handleRouteChange(page.url)}>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer(true)}
          color="inherit"
          // sx={{ color: "#d6d6d6" }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer anchor={"right"} open={openState} onClose={toggleDrawer(false)}>
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
