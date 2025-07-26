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
import { retrievePopularProducts } from "./selector";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { Product } from "../../../libs/types/product";
import { serverApi } from "../../../libs/config";

/** REDUX SLICE & SELECTOR **/
const popularProductsRetriever = createSelector(
  retrievePopularProducts,
  (popularProducts) => ({ popularProducts })
);

export default function PopularProducts(){
  const { popularProducts } = useSelector(popularProductsRetriever);
  // console.log("PopularProducts from Store:", popularProducts);

  return <div className="popular-products-section">
    <Container className="popular-container">
      <Stack className="popular-frame">
        
        <Stack className="popular-titles">
          <Typography className="title" variant="h1">Popular Products</Typography>
          <Link className="view-all" href="#">View all</Link>
        </Stack>

        <Stack className="popular-cards-frame">
          <CssVarsProvider>
            {popularProducts.length !== 0 ? 
              (popularProducts.map((product: Product) => {
                const imagePath = `${serverApi}/${product.productImages[0]}`
                return(
                  <Card 
                    className="card"
                    sx={{ width: "215px", height: "370px", boxShadow: 'lg' }} 
                    key={product._id}
                  >
                    <CardOverflow className="card-img-frame">
                        <img
                          className="card-img"
                          style={{ width: "100%", height: "100%" }}
                          src={imagePath}
                          loading="lazy"
                          alt="phone image"
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
                        endDecorator={
                          <Chip component="span" size="sm" variant="soft" color="success" sx={{marginLeft: "10px"}}>
                            Lowest price
                          </Chip>
                        }
                      >
                        {product.productPrice}$
                      </TypographyJoy>
                    </CardContent>
                    <ButtonJoy className="shopping-btn">
                        Add to cart
                      <ShoppingCartIcon sx={{marginLeft: "6px"}}></ShoppingCartIcon>
                    </ButtonJoy>
                  </Card>
                  )}
                )
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