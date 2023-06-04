import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ProductCard from "./ProductCard";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";

export default function Home(props) {
  const linkStyle = {
    color: "black",
  };
  return (
    <>
      <Grid sx={{ paddingY: "40px" }}>
        <Container>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Featured Products
            </Typography>
            <Link style={linkStyle}>See All</Link>
          </Stack>

          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginTop: "30px" }}
            justifyContent="center"
          >
            <Grid item sx={10} sm={6} md={4}>
              <item>
                <ProductCard heading="Burnikk" imgae={image1} />
              </item>
            </Grid>
            <Grid item sx={10} sm={6} md={4}>
              <item>
                <ProductCard heading="Kibal Batal" imgae={image2} />
              </item>
            </Grid>
            <Grid item sx={10} sm={6} md={4}>
              <item>
                <ProductCard heading="very Nice" imgae={image3} />
              </item>
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ marginTop: "10px" }}
            justifyContent="center"
          >
            <Grid item sx={10} sm={6} md={4}>
              <item>
                <ProductCard heading="card1" imgae={image4} />
              </item>
            </Grid>
            <Grid item sx={10} sm={6} md={4}>
              <item>
                <ProductCard heading="card1" imgae={image5} />
              </item>
            </Grid>
            <Grid item sx={10} sm={6} md={4}>
              <item>
                <ProductCard heading="card1" imgae={image6} />
              </item>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </>
  );
}
