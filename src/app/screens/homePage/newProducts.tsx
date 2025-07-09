import React from "react";
import { Container, Stack, Box, Typography, Button, Link } from "@mui/material";
import Card from '@mui/joy/Card';
import { 
  AspectRatio, 
  CardContent, 
  CardOverflow, 
  Chip, 
  Link as LinkJoy, 
  Typography as TypographyJoy,
  Button as ButtonJoy,
  CircularProgress,
  SvgIcon,
  CardActions
 } from "@mui/joy";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { CssVarsProvider } from "@mui/joy/styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import "../../../css/home.css"


export default function NewProducts(){
  return <div className="new-products-section">
    <Container className="new-container">
      <Stack className="new-frame">
        
        <Stack className="new-titles">
          <Typography className="title" variant="h1">New Products</Typography>
          <Link className="view-all" href="#">View all</Link>
        </Stack>

        <Stack className="new-cards-frame">
          <CssVarsProvider>
            {[1,2,3,4,5].map((ele) => {
              return(
                <Card sx={{ width: "215px", height: "370px", boxShadow: 'lg' }} className="card">
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
                      endDecorator={
                        <Chip component="span" size="sm" variant="soft" color="success" sx={{marginLeft: "10px"}}>
                          Lowest price
                        </Chip>
                      }
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
    </Container>
  </div>
}