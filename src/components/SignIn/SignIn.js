import React from "react";
import {
  Grid,
  Typography,
  Container,
  TextField,
  Button,
  IconButton,
  Divider,
  Stack,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <Grid container item md={6} sm={10} sx={{ margin: "auto" }}>
        <Container
          sx={{
            border: "1px solid #c5c5c5",
            marginTop: "50px",
            padding: " 1.6rem 3.2rem 3.2rem",
          }}
        >
          <Typography>Sign up to Salinaka</Typography>
          <Grid container justifyContent="center">
            <Grid item md={6} sx={{ marginTop: "40px" }}>
              <item>
                <TextField
                  variant="outlined"
                  label="* Email"
                  size="small"
                  sx={{ width: "22rem" }}
                  placeholder="john"
                />
                <TextField
                  variant="outlined"
                  label="* Password"
                  size="small"
                  sx={{ width: "22rem", marginY: "25px" }}
                  placeholder="john"
                  type="password"
                />
                <Link>Forget Password</Link>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      background: "black",
                      padding: "12px",
                      marginRight: "10px",
                      "&:hover": {
                        background: "#202124",
                      },
                    }}
                    endIcon={<ArrowForwardIcon />}
                  >
                    Sign in
                  </Button>
                </Grid>
              </item>
            </Grid>
            <Grid container md={1}>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginLeft: "15px" }}
              />
            </Grid>

            <Grid
              item
              md={5}
              sx={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <item>
                <Stack>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#006ce6",
                      padding: "13px 15px",
                      fontSize: "12px",
                    }}
                    startIcon={<FacebookIcon />}
                  >
                    Continue With Facebook
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "white",
                      color: "black",
                      padding: "13px 15px",
                      fontSize: "12px",
                      marginY: "20px",
                    }}
                    startIcon={<FacebookIcon />}
                  >
                    Continue With Google
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      background: "#2f363c",
                      padding: "13px 15px",
                      fontSize: "12px",
                    }}
                    startIcon={<FacebookIcon />}
                  >
                    Continue With Github
                  </Button>
                </Stack>
              </item>
            </Grid>
          </Grid>
        </Container>

        <Container
          sx={{
            border: "1px solid #c5c5c5",
            background: "#f2f2f2",
          }}
        >
          <Stack
            sx={{
              padding: "10px 0px",
            }}
            justifyContent="center"
            alignItems="center"
            direction="row"
            spacing={2}
          >
            <Typography sx={{ fontSize: "13px" }}>
              Don't have an account?
            </Typography>
            <Button
              variant="outlined"
              sx={{
                padding: "4px 12px",
                border: "1px solid gray",
                color: "black",
                fontSize: "13px",
              }}
            >
              Sign In
            </Button>
          </Stack>
        </Container>
      </Grid>
    </>
  );
}
