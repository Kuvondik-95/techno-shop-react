import React, { Component, createRef } from 'react';
import { Container, Stack, Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import CompareIcon from '@mui/icons-material/Compare';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';


export default function ChosenProduct() {
  const myDivRef = createRef<HTMLDivElement>();

//HANDLERS
  const handleClick = () => {
    console.log("myDivRef:", myDivRef?.current?.style.display);
    if(myDivRef.current){
      myDivRef.current.style.display = 'block';
    }
  };


  return (
    <div className="chosen-product-section">
      <Container className="chosen-product-container">
      <Typography className="main-title">
        Product Detail
      </Typography>
      <Stack className="chosen-product-frame">
        <Typography className="title">
          Smartphone Apple Iphone 11
        </Typography>

        <Stack className="details-frame">
          
          {/* LEFT IMAGES */}
          <Stack className="images">
            {/* MAIN IMAGE */}
            <Box className="main-img-box">
              <img 
                className="main-img" 
                src="/img/phoneImg/main.png" 
                alt="" 
              />
            </Box>

            {/* SECONDARY IMAGES */}  
            <Stack className="basic-images">
              <Box className="basic-box">
                <img 
                  className="basic-img basic-img-1" 
                  src="/img/phoneImg/basic1.png" 
                  alt="" 
                />
              </Box>
              
              <Box className="basic-box">
                <img 
                  className="basic-img basic-img-2" 
                  src="/img/phoneImg/basic2.png" 
                  alt="" 
                />
              </Box>
              
              <Box className="basic-box">
                <img 
                  className="basic-img basic-img-3" 
                  src="/img/phoneImg/basic3.png" 
                  alt="" 
                />
              </Box>
            </Stack>
          </Stack>
          
          {/* CENTER DETAILS */}
          <Stack className="details">
            <Box className="memory-box">
              <Typography className="title">Memory capacity</Typography>
              <Stack className="memory-buttons">
                <button className="memory-btn">64</button>
                <button className="memory-btn">128</button>
                <button className="memory-btn">256</button>
              </Stack>
            </Box>

            <Box className="colors-box">
              <Typography className="title">Colors</Typography>
              <Stack className="colors">
                <div className="color" style={{background:"gray"}}></div>
                <div className="color" style={{background:"green"}}></div>
                <div className="color" style={{background:"black"}}></div>
                <div className="color" style={{background:"orange"}}></div>
              </Stack>
            </Box>

            <Box className="details-box">
              <Typography className="title">Characteristics</Typography>
              <Stack className="details-stack">
                <Typography className="details-info">
                  <span className="details-name">Diagonal:</span> 5 dumes
                </Typography>
                
                <Typography className="details-info">
                  <span className="details-name">Built-in memory:</span> 32 GB
                </Typography>
                
                <Typography className="details-info">
                  <span className="details-name">Random access memory:</span> 4 GB
                </Typography>

                <a className="all-info" onClick={handleClick}>All informations</a>
              </Stack>
            </Box>
          </Stack>

          {/* RIGHT PRICES */}
          <Stack className="prices">
            <Box className="price-box">
              Price: <span className="price">500</span>$
            </Box>
            
            <Box className="compare-box">
              Compare <CompareIcon className="icon"/>
            </Box>

            <Stack className="purchase-box">
              <button className="buy-btn">Add to Card</button>
              <Button 
                className="delivery-btn"
                endIcon={<LocalShippingIcon/>}
                disabled
              >
                Delivery
              </Button>
            </Stack>
          </Stack>
        </Stack>
        
        {/* ALL-INFO */}
        <Stack className="all-info-frame" ref={myDivRef}>
          <Typography className="title">
            All informations
          </Typography>
          
          {/* INFOBOX */}
          <Box className="info-box">
            <Typography className="info-title">Main characteristics</Typography>
            <div className="infos">
              <div className="info-name">Memory</div>
              <div className="pro-info">128 GB</div>
            </div>

            <div className="infos">
              <div className="info-name">Color</div>
              <div className="pro-info">Black</div>
            </div>
          </Box>

          {/* INFOBOX */}
          <Box className="info-box">
            <Typography className="info-title">Processor</Typography>
            <div className="infos">
              <div className="info-name">Processor</div>
              <div className="pro-info">A 14 Bionic</div>
            </div>
          </Box>

          {/* INFOBOX */}
          <Box className="info-box">
            <Typography className="info-title">Display</Typography>
            <div className="infos">
              <div className="info-name">Diagonal</div>
              <div className="pro-info">6,1"</div>
            </div>
            <div className="infos">
              <div className="info-name">Display Tech.</div>
              <div className="pro-info">True Tone</div>
            </div>
            <div className="infos">
              <div className="info-name">Type of pixels</div>
              <div className="pro-info">OLED</div>
            </div>
            <div className="infos">
              <div className="info-name">460 pixel/dume</div>
              <div className="pro-info">True Tone</div>
            </div>
            <div className="infos">
              <div className="info-name">Contrast</div>
              <div className="pro-info">2000000:1</div>
            </div>
          </Box>

          {/* INFOBOX */}
          <Box className="info-box">
            <Typography className="info-title">Camera</Typography>
            <div className="infos">
              <div className="info-name">Pixels</div>
              <div className="pro-info">12 MP</div>
            </div>
          </Box>

        </Stack>

      </Stack>
        
      </Container>
    </div>
  );
}
