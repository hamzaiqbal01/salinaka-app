import React from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  TextField,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import { useTheme } from "@mui/material/styles";

export default function Navbar() {
  const pages = [
    { lable: "Home", Path: "/" },
    { lable: "Shop", Path: "/shop" },
    { lable: "Feature", Path: "/Feature" },
    { lable: "Recomended", Path: "/Rec" },
  ];

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };
  const theme = useTheme();
  console.log("theme" + theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar
        position="sticky"
        sx={{ background: "#f9f9f9", color: "black", boxShadow: "none" }}
      >
        <Toolbar sx={{ margin: "20px" }}>
          <img src={logo} alt="logo" />

          {isMatch ? (
            <>
              <DrawerComponent />
            </>
          ) : (
            <>
              <Tabs sx={{ fontSize: "14px" }}>
                {pages.map((page, index) => {
                  return (
                    <Link to={`${page.Path}`}>
                      <Tab
                        key={index}
                        label={page.lable}
                        sx={{ color: "black" }}
                      />
                    </Link>
                  );
                })}
              </Tabs>

              <TextField
                variant="outlined"
                label="search"
                size="small"
                sx={{ marginLeft: "auto" }}
              />

              <ShoppingBagOutlinedIcon
                fontSize="large"
                sx={{ marginLeft: "13px", marginRight: "70px" }}
              />
            </>
          )}
          <Link to="/login" style={linkStyle}>
            <Button
              variant="contained"
              sx={{
                background: "black",
                borderRadius: "0",
                "&:hover": {
                  background: "black",
                },
              }}
            >
              Login
            </Button>
          </Link>

          <Link to="/signin">
            <Button
              variant="contained"
              sx={{
                background: "#f9f9f9",
                color: "gray",
                borderRadius: "0",
                marginX: "10px",
                boxShadow: "none",
                border: "1px solid #d7d7d7",
                "&:hover": {
                  background: "none",
                },
              }}
            >
              Signin
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </>
  );
}
