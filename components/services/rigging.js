import React from "react";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import {
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

export default function Rigging() {
  return (
    <>
      <List>
        <ListItem>
          <ListItemAvatar>
            <TrackChangesIcon />
          </ListItemAvatar>
          <ListItemText primary="Architectural services." />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <TrackChangesIcon />
          </ListItemAvatar>
          <ListItemText primary="Mobile services." />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <TrackChangesIcon />
          </ListItemAvatar>
          <ListItemText primary="Cable manufacture." />
        </ListItem>
        <Divider variant="inset" component="li" />

        <ListItem>
          <ListItemAvatar>
            <TrackChangesIcon />
          </ListItemAvatar>
          <ListItemText primary="Cable swaging and splicing." />
        </ListItem>
        <Divider variant="inset" component="li" />
      </List>
    </>
  );
}
