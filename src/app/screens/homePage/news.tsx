import React from "react";
import { Container, Stack, Box, Typography, Button, Link } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import "../../../css/home.css"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// Import additional module styles if needed, e.g., 'swiper/css/navigation'
import 'swiper/css/navigation';

// Import Swiper modules if you need them, e.g., Navigation, Pagination
import SwiperCore, { Navigation } from 'swiper';
SwiperCore.use([Navigation]); // Initialize modules

export default function News(){
  return <div className="news-section">

    <Container className="news-container">
      
      <Stack className="news-titles">
        <Typography className="title" variant="h1">
          News and discounts
        </Typography>
        <Link className="view-all" href="#">View all</Link>
      </Stack>
      
      <Stack className="news-frame">
        <Swiper
          className="swiper-frame"
          spaceBetween={50}
          slidesPerView={1}
          navigation // Enables navigation arrows
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="swiper-slide">
            <Stack className="slide-stack">
              <Stack className="slide-left">
                <Typography className="title-top">New Iphone 16</Typography>
                
                <Box className="middle-titles">
                    <Typography className="title-big">Now in new colors</Typography>
                    <Typography className="title-small">Available in Stock</Typography>
                </Box>

                <Button className="buy-btn">Buy</Button>
              </Stack>

              <Stack className="slide-right">
                <img src="/img/addPhones.png" alt="" />
              </Stack>
            </Stack>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide">
            <Stack className="slide-stack">
              <Stack className="slide-left">
                <Typography className="title-top">New Iphone 16</Typography>
                
                <Box className="middle-titles">
                    <Typography className="title-big">Now in new colors</Typography>
                    <Typography className="title-small">Available in Stock</Typography>
                </Box>

                <Button className="buy-btn">Buy</Button>
              </Stack>

              <Stack className="slide-right">
                <img src="/img/addPhones.png" alt="" />
              </Stack>
            </Stack>
          </SwiperSlide>
          
          <SwiperSlide className="swiper-slide">
            <Stack className="slide-stack">
              <Stack className="slide-left">
                <Typography className="title-top">New Iphone 16</Typography>
                
                <Box className="middle-titles">
                    <Typography className="title-big">Now in new colors</Typography>
                    <Typography className="title-small">Available in Stock</Typography>
                </Box>

                <Button className="buy-btn">Buy</Button>
              </Stack>

              <Stack className="slide-right">
                <img src="/img/addPhones.png" alt="" />
              </Stack>
            </Stack>
          </SwiperSlide>
        </Swiper>
      </Stack>
    </Container>
  </div>
}