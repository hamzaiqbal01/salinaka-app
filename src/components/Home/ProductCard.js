import React from "react";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import image1 from "../assets/image1.png";
export default function ProductCard(props) {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={props.imgae}
            alt="green iguana"
            sx={{
              margin: "auto",
              width: "70%",
              padding: "37px 7px",
              marginTop: "20px",
            }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {props.heading}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              alias quae labore voluptatibus voluptatum laboriosam praesentium
              recusandae quis tempora nemo?\
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
