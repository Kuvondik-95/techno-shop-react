import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { Routes, Route, useLocation } from 'react-router-dom'
import "../../../css/products.css";
import { Input, Button as ButtonJoy } from "@mui/joy";
import SearchIcon from '@mui/icons-material/Search';
import { CssVarsProvider } from "@mui/joy/styles";

import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Card from '@mui/joy/Card';
import { 
  AspectRatio, 
  CardContent, 
  CardOverflow, 
  Chip, 
  Link as LinkJoy, 
  Typography as TypographyJoy,
  CircularProgress,
  SvgIcon,
  CardActions
 } from "@mui/joy";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function Products(){

  return  (
    <div className="products-section">
      <Container className="products-container">
        <Typography className="main-title">Products</Typography>  
        
        <Stack className="products-main-frame">
          
          <Stack className="search-frame">
            {/* BRANDS */}
            <Stack className="brands-frame">
              <button className="brand-btn">Apple</button>
              <button className="brand-btn">Samsung</button>
              <button className="brand-btn">Huawei</button>
              <button className="brand-btn">LG</button>
            </Stack>
            {/* SEARCH, ORDER */}
            <Stack className="search-order">
              <CssVarsProvider>
              <Input
                className={"search-input"}
                variant="outlined"
                placeholder="Type here"
                sx={{"--Input-focusedThickness": "0px"}}
                endDecorator={
                  <ButtonJoy 
                  className="search-btn" 
                  endDecorator={<SearchIcon />} 
                  sx={{ mr: -1.5}}
                  >
                    SEARCH
                  </ButtonJoy>
                }
              />
              </CssVarsProvider>

              <Box className="dropdown-box">
                <CssVarsProvider>
                  <Select
                    className="order-select"
                    placeholder="Order"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                      width: 240,
                      [`& .${selectClasses.indicator}`]: {
                        transition: '0.2s',
                        [`&.${selectClasses.expanded}`]: {
                          transform: 'rotate(-180deg)',
                        },
                      },
                    }}
                  >
                    <Option value="new">New</Option>
                    <Option value="price">Price</Option>
                    <Option value="views">Views</Option>
                  </Select>
                </CssVarsProvider>
              </Box>
              
            </Stack>

          </Stack>
          
          {/* CATEGORY, PRODUCTS */}
          <Stack className="category-products-frame">
            <Stack className="category-frame">
              <button className="category-btn">SMARTPHONES</button>
              <button className="category-btn">FOLDABLE</button>
              <button className="category-btn">BASIC</button>
              <button className="category-btn">RUGGED</button>
              <button className="category-btn">OTHER</button>
            </Stack>
            
            <Stack className="products-frame">
              <CssVarsProvider>
                {[1,2,3,4,5,6].map((ele, index) => {
                  return(
                    <Card 
                    key={index}
                    sx={{ width: "215px", height: "370px", boxShadow: 'lg' }} className="card"
                    >
                      <CardOverflow className="card-img-frame">
                          <img
                            className="card-img"
                            style={{ width: "121px", height: "166px" }}
                            src="/img/newPhone.png"
                            loading="lazy"
                            alt=""
                          />
                      </CardOverflow>
                      <CardContent className="card-content">
                        <TypographyJoy level="body-xs" className="product-category">
                          SMARTPHONE
                        </TypographyJoy>
                        
                        <LinkJoy
                          className="product-name"
                          href="#product-card"
                          color="neutral"
                          textColor="text.primary"
                          overlay
                          // endDecorator={<ArrowOutwardIcon />}
                          sx={{ fontWeight: 'md' }}
                        >
                          Samsung Galaxy S24
                        </LinkJoy>

                        <TypographyJoy
                          className="product-price"
                          level="title-lg"
                          sx={{ mt: 1, fontWeight: 'xl' }}
                        >
                          700$
                        </TypographyJoy>
                        <TypographyJoy className="product-left" level="body-sm">
                          (Only <b>7</b> left in stock!)
                        </TypographyJoy>
                      </CardContent>
                      <ButtonJoy className="shopping-btn">
                          Add to cart
                        <ShoppingCartIcon sx={{marginLeft: "6px"}}></ShoppingCartIcon>
                      </ButtonJoy>
                    </Card>
                  )
                })}
              </CssVarsProvider>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </div>
  )
}
