import { Container, Stack, Box, Typography, Button } from "@mui/material";
import React from "react";
import "../../../css/home.css"
import PopularProducts from "./popularProducts";
import NewProducts from "./newProducts";
import Advertisement from "./advertisement";
import News from "./news";
import Brands from "./Brands";


export default function HomePage(){
  return (
  <>
  <div className="header-section">
    <Container className="header-container">
      <Stack className="header-frame">
        
        <Stack className="header-frame-left">
          <Typography className="header-title">
            Discount from T-Shop <br /> for Samsung smartphone
          </Typography>
          <Button className="header-btn">More details</Button>
        </Stack>
        
        <Box className="header-frame-right">
          <img src={"/img/circle8.svg"} alt="this is Phone" className="header-shape-1" />
          <img src={"/img/image1.png"} alt="this is Phone" className="header-image-1" />
          <img src={"/img/image2.png"} alt="this is Phone" className="header-image-2" />
          <img src={"/img/image3.png"} alt="this is Phone" className="header-image-3" />
          <img src={"/img/image4.png"} alt="this is Phone" className="header-image-4" />
        </Box>
      </Stack>
    </Container>
  </div>

  <PopularProducts/>
  <NewProducts/>
  <Advertisement/>
  <News/>
  <Brands/>
  </>
);

}