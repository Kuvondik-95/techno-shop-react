import React from "react";
import { Container, Stack, Box, Typography, Button, Link } from "@mui/material";
import Card from '@mui/joy/Card';
import { CssVarsProvider } from "@mui/joy/styles";

import "../../../css/home.css"


export default function Services(){
  return <div className="services-section">
    <Container className="services-container">
      <Stack className="services-frame">
        
        <Stack className="services-titles">
          <Typography className="title" variant="h1">Why people choose us</Typography>
          <Link className="view-all" href="#"></Link>
        </Stack>

        <Stack className="services-cards-frame">
          <CssVarsProvider>
            <Card className="card">
              <Typography className="title">Convenient delivery</Typography>
              <Box className="icon-box">
                <img className="icon" src="/icon/deliveryt.svg" alt="" />
              </Box>
            </Card>
            
            <Card className="card">
              <Typography className="title">Easy payment</Typography>
              <Box className="icon-box">
                <img className="icon" src="/icon/pay.svg" alt="" />
              </Box>
            </Card>
            
            <Card className="card">
              <Typography className="title">Guarantee</Typography>
              <Box className="icon-box">
                <img className="icon" src="/icon/guarantee.svg" alt="" />
              </Box>
            </Card>
            
            <Card className="card">
              <Typography className="title">Refund avaliable</Typography>
              <Box className="icon-box">
                <img className="icon" src="/icon/return.svg" alt="" />
              </Box>
            </Card>
            
            <Card className="card">
              <Typography className="title">Express delivery</Typography>
              <Box className="icon-box">
                <img className="icon" src="/icon/drone.svg" alt="" />
              </Box>
            </Card>
            
            <Card className="card">
              <Typography className="title">Discounts</Typography>
              <Box className="icon-box">
                <img className="icon" src="/icon/discount.svg" alt="" />
              </Box>
            </Card>
          </CssVarsProvider>
        </Stack>
      </Stack>
    </Container>
  </div>
}