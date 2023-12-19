import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import TextureIcon from "@mui/icons-material/Texture";
import React from "react";

export default function Fabrication() {
  return (
    <>
      <List>
        <ListItem>
          <ListItemAvatar>
            <TextureIcon />
          </ListItemAvatar>
          <ListItemText primary="Fabrication of structural elements in construction sites." />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <TextureIcon />
          </ListItemAvatar>
          <ListItemText primary="Fabrication of hand rails for stairways." />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <TextureIcon />
          </ListItemAvatar>
          <ListItemText primary="Fabrication of bollards." />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <TextureIcon />
          </ListItemAvatar>
          <ListItemText primary="Fabrication of gates and fences for residential sites." />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </>
  );
}
