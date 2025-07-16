import { Container, Stack, Box, Typography, Button } from "@mui/material";
import React from "react";
import "../../../css/home.css"
import PopularProducts from "./popularProducts";
import NewProducts from "./newProducts";
import Advertisement from "./advertisement";
import News from "./news";
import Brands from "./Brands";
import Services from "./services";
import ActiveUsers from "./activeUsers";


export default function HomePage(){
  return (
  <>
  <div className="header-section">
    <Container className="header-container">
      <Stack className="header-frame">
        
        <Stack className="header-frame-left">
          <Typography className="header-title">
            Discount From T-Shop <br /> For Samsung Smartphones
          </Typography>
          <Button className="header-btn shining">More details</Button>
        </Stack>
        
        <Box className="header-frame-right">
          <div className="polygon-1"></div>
          <div className="polygon-2"></div>
          <div className="polygon-3"></div>
          <div className="polygon-4"></div>
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
  <Services/>
  <ActiveUsers/>
  </>
);

}