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
import FiberNewIcon from '@mui/icons-material/FiberNew';
import "../../../css/home.css"

import { retrieveNewProducts, retrievePopularProducts } from "./selector";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";

/** REDUX SLICE & SELECTOR **/
const newProductsRetriever = createSelector(
  retrieveNewProducts,
  (newProducts) => ({ newProducts })
);

export default function NewProducts(){
  const { newProducts } = useSelector(newProductsRetriever);

  return <div className="new-products-section">
    <Container className="new-container">
      <Stack className="new-frame">
        
        <Stack className="new-titles">
          <Typography className="title" variant="h1">New Products</Typography>
          <Link className="view-all" href="/products">View all</Link>
        </Stack>

        <Stack className="new-cards-frame">
          <CssVarsProvider>
            {newProducts.length !==0 ? 
              (newProducts.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`
                return(
                  <Card 
                    sx={{ width: "215px", height: "370px", boxShadow: 'lg' }} className="card"
                    key={product._id}
                  >
                    <CardOverflow className="card-img-frame">
                        <img
                          className="card-img"
                          style={{ width: "100%", height: "100%" }}
                          src={imagePath}
                          loading="lazy"
                          alt=""
                        />
                        <img
                          className="new-sign" 
                          src="/icon/newsign.png" 
                          alt="new Sign icon" 
                        />
                    </CardOverflow>
                    <CardContent className="card-content">
                      <TypographyJoy level="body-xs" className="product-category">
                        {product.productCollection}
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
                        {product.productName}
                      </LinkJoy>

                      <TypographyJoy
                        className="product-price"
                        level="title-lg"
                        sx={{ mt: 1, fontWeight: 'xl' }}
                        endDecorator={<FiberNewIcon/>}
                      >
                        {product.productPrice}$
                      </TypographyJoy>
                    </CardContent>
                    <ButtonJoy className="shopping-btn" id="shopping-btn">
                        Add to cart
                      <ShoppingCartIcon sx={{marginLeft: "6px"}}></ShoppingCartIcon>
                    </ButtonJoy>
                  </Card>
                  )
                })
              ):(
                <Box className="no-data">New products are not available!</Box>
              )
            }
            

          </CssVarsProvider>
        </Stack>
      </Stack>
    </Container>
  </div>
}