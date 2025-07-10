import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import "../../../css/footer.css"

export default function Footer(){
  return <div className="footer-section">
      <Container className="footer-container">
        <Stack className="footer-frame">
          <Stack className="footer-top">
            <NavLink to={"/"}>
              <h3 className="logo">T-Shop</h3>
            </NavLink>
            
            <Stack className="social-frame">
              <Typography>Contact us</Typography>
              <Box className="icon-box"><FacebookIcon color="success"/></Box>
              <Box className="icon-box"><InstagramIcon color="success"/></Box>
              <Box className="icon-box"><TelegramIcon color="success"/></Box>
            </Stack>
          </Stack>

          <Stack className="footer-bottom">
            <Box className="footer-info about">
              <Typography className="title">About us</Typography>
              <Typography className="subtitle">
                Welcome to TechnoShop, your ultimate destination for all things mobile! Founded in 2020, we set out with a simple mission: to make high-quality smartphones and accessories accessible to everyone, no matter where you are. 
              </Typography>
            </Box>
            <Box className="footer-info">
              <Typography className="title">Units</Typography>
              <Typography className="subtitle">Home</Typography>
              <Typography className="subtitle">Products</Typography>
              <Typography className="subtitle">Help</Typography>
            </Box>
            <Box className="footer-info">
              <Typography className="title">Our Address</Typography>
              <Typography className="subtitle"> 
                Urgench city, Amir Temur street, 10/21
              </Typography>
              <Typography className="subtitle">+998900944000</Typography>
              <Typography className="subtitle">techno-shop@gmail.com</Typography>
            </Box>
          </Stack>
        </Stack>
      </Container>
      <Stack className="copyright-frame">
        <Typography>© 2020-2025 Techno Shop, All Rights Reserved</Typography>
      </Stack> 
    </div>
}