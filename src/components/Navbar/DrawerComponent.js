import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function DrawerComponent() {
  const pages = [
    { lable: "Home", Path: "/" },
    { lable: "Shop", Path: "/shop" },
    { lable: "Feature", Path: "/Feature" },
    { lable: "Recomended", Path: "/Rec" },
  ];
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => {
          setOpenDrawer(false);
        }}
      >
        <List>
          {pages.map((page, index) => {
            return (
              <ListItemButton key={index}>
                <ListItemIcon>
                  <Link to={`${page.Path}`}>
                    <ListItemText
                      sx={{ color: "black", textDecoration: "none" }}
                    >
                      {page.lable}
                    </ListItemText>
                  </Link>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>

      <IconButton
        onClick={() => {
          setOpenDrawer(true);
        }}
        sx={{ marginLeft: "auto" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
